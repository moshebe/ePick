module.exports = {
	generatePick: function (req, res) {
		var poll = {
			id: 37,
			question: "am I a Cat?",
			products: [
			{
				id: 1,
				picture: 'http://thecatapi.com/api/images/get?format=src&type=png',
				url: 'http://ebay.com/api/images/get?format=src&type=png',
				title: 'Im a Cat'
			},
			{
				id: 2,
				picture: 'http://thecatapi.com/api/images/get?format=src&type=png',
				url: 'http://ebay.com/api/images/get?format=src&type=png',
				title: 'Im a Cat'
			},
			{
				id: 3,
				picture: 'http://thecatapi.com/api/images/get?format=src&type=png',
				url: 'http://ebay.com/api/images/get?format=src&type=png',
				title: 'Im a Cat'
			},
			{
				id: 4,
				picture: 'http://thecatapi.com/api/images/get?format=src&type=png',
				url: 'http://ebay.com/api/images/get?format=src&type=png',
				title: 'Im a Cat'
			}]
		};
		res.render('pick', poll);
	}
};