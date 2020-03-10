/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discountPrice: DataTypes.INTEGER,
    description: DataTypes.STRING,
    negotiable: DataTypes.BOOLEAN,
    views: DataTypes.INTEGER,
    VendorId: DataTypes.INTEGER,
    tags: DataTypes.STRING,
    variants: DataTypes.BOOLEAN,
    quantity: DataTypes.BOOLEAN,
    chargeTax: DataTypes.BOOLEAN,
    adons: DataTypes.JSONB
  }, {});
  Product.associate = models => {
    Product.hasMany(models.productFile, {
      foreignKey: 'ProductId',
      targetKey: 'id'
    });
    Product.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Product.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Product;
};
