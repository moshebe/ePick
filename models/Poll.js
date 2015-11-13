module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Poll', {
  	question: { type: DataTypes.STRING }
  });
}