export default (sequelize, DataTypes) => {
  const productFile = sequelize.define('productFile', {
    name: DataTypes.STRING,
    ProductId: {
      type: 'integer',
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    size: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  productFile.associate = (models) => {
    productFile.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return productFile;
};
