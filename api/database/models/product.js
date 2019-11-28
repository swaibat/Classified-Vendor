/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    negotiable: DataTypes.BOOLEAN,
    adons: DataTypes.JSONB
    
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.productFile, {
      foreignKey: 'ProductId',
      targetKey: 'id',
    });
    Product.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
};
return Product;
}
