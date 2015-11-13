module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
	title: { type: DataTypes.STRING },
	price: { type: DataTypes.DOUBLE },
	picture: { type: DataTypes.STRING },
	url: { type: DataTypes.STRING }
  });
}