'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerSubCategory = sequelize.define('SellerSubCategory', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    SellerCategoryId: DataTypes.INTEGER
  }, {});
  SellerSubCategory.associate = function(models) {
    // associations can be defined here
  };
  return SellerSubCategory;
};