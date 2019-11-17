/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    subCategoryId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    negotiable: DataTypes.BOOLEAN
    
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.productFile, {
      foreignKey: 'productId',
      targetKey: 'id',
    });
};
return Product;
}
