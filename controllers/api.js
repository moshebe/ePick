var ebay = require('../helpers/ebay.js');
var Promise = require('bluebird');

module.exports =  {
    createPick: function (req, res) {
        if(!req.require(['products', 'question'])) return;

        var productsPromises = [];
      
        JSON.parse(req.body.products).forEach(function (productId){
          productsPromises.push(ebay.getProductInfo(productId));
         });

        Promise.all(productsPromises).then(function (productsInfo){
          
          app.models.Poll.create({
            question: req.body.question
          })
          .then(function (poll){
            res.json(poll);
            return poll;
          })
          .then(function (poll){
            // poll.addProducts(productsInfo);
          });



        });
       
    },
 
    getProductInfo: function (req, res) {
        // if(!req.require(['productIds'])) return;
          
        ebay.getProductInfo('371320064687').then(function (productInfo) {
        	// TODO: add to DB

        	res.json(productInfo);
        });
       
    }

};
