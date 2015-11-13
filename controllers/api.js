var ebay = require('../helpers/ebay.js');
var Promise = require('bluebird');

module.exports =  {
  createPick: function (req, res) {
    if(!req.require(['products', 'question'])) return;

    var productsPromises = [];
    var obj = {};

    JSON.parse(req.body.products).forEach(function (productId){
      productsPromises.push(ebay.getProductInfo(productId));
    });

    app.models.Poll.create({
      question: req.body.question
    })
    .then(function (poll){
      res.json({id: poll.id, url: 'http://' + req.headers.host + '/Pick/'+ poll.id + '/'});
      obj.poll = poll;
      return Promise.all(productsPromises);
    })
    .then(function(productsInfo){
      for(var key in productsInfo){
        productsInfo[key].PollId = obj.poll.id;
      }
      return app.models.Product.bulkCreate(productsInfo);      
    });

  },

  getProductInfo: function (req, res) {
        // if(!req.require(['productId'])) return;

        ebay.getProductInfo(req.params.productId).then(function (productInfo) {
        	res.json(productInfo);
        });

      }

    };
