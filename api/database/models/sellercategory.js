'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerCategory = sequelize.define('SellerCategory', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  SellerCategory.associate = function(models) {
    // associations can be defined here
  };
  return SellerCategory;
};