'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerSubCategory = sequelize.define('SellerSubCategory', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    SellerCategoryId: DataTypes.INTEGER
  }, {});
  SellerSubCategory.associate = function(models) {
    SellerSubCategory.hasMany(models.SellerSubCategoryOne, {
      foreignKey: 'SubCategoryId',
      targetKey: 'id',
    });
  };
  return SellerSubCategory;
};