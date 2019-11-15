/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
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
  product.associate = (models) => {
    // associations can be defined here
  };
  return product;
};
