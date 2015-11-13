module.exports = {
	generatePick: function (req, res) {
		app.models.Poll.findById(req.params.pickItem, {include: [{all:true}]}).then(function (poll) {
			res.json('pick', poll);	
		});
		
	}
};