'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    images: DataTypes.STRING,
    description: DataTypes.STRING,
    negotiable: DataTypes.BOOLEAN
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};