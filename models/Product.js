module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
	title: { type: DataTypes.STRING },
	picture: { type: DataTypes.STRING },
	url: { type: DataTypes.STRING }
  });
}