module.exports = function (models) {

	models.Poll.hasMany(models.Product);

	models.Product.belongsTo(models.Poll);
	models.Vote.belongsTo(models.Poll);


	models.Product.hasMany(models.Vote);
	models.Vote.belongsTo(models.Product);	
};
