module.exports = {
	generatePick: function (req, res) {
		app.models.Poll.findById(req.params.pickItem, {include: [{all:true}]}).then(function (poll) {
			res.json('pick', poll);	
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

		app.models.Vote.count({}).then(function (count){
			res.json({'votes': count});
		});
	}
};