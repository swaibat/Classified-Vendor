/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    timestamp: DataTypes.STRING,
    base: DataTypes.STRING,
    rates: DataTypes.JSONB
  },
  {});
  Currency.associate = function (models) {
    // associations can be defined here
  };
  return Currency;
};
