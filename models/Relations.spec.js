module.exports = function (models) {
	models.Poll.hasMany(models.Product);
	models.Vote.hasOne(models.Product);
	models.Poll.hasMany(models.Vote);
	models.Product.belongsTo(models.Poll);
};