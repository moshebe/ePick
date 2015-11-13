module.exports = {
	generatePick: function (req, res) {
		app.models.Poll.findById(req.params.pickItem, {include: [{all:true}]}).then(function (poll) {
			res.render('pick', {poll: poll});
		});
		
	},

	vote: function (req, res){
		app.models.Vote.create({
			PollId: req.params.pickId,
			ProductId: req.params.productId
		});

		res.json(true);	
	},

	statistics: function(req, res){
		var obj = {};

		app.models.Vote.count({where: {PollId: req.params.pickId}}).then(function (count){
			obj.count = count;

			return app.models.Vote.findAll({
				attributes: ['Vote.ProductId', [app.models.sequelize.fn('count', app.models.sequelize.col('Vote.id')), 'votes']],
				where: {PollId: req.params.pickId},
				include: [{model: app.models.Product}],
				group: ['Vote.ProductId'],
			});

		}).then(function (results){
			
			for (var key in results){
				results[key] = results[key].get({plain: true});
	
				results[key]['percents'] = (results[key].votes / obj.count) * 100;		
			}

			res.json(results);
		});


	}
};
