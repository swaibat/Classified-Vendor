export default (sequelize, DataTypes) => {
  const VendorCategory = sequelize.define(
    'VendorCategory',
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      icon: DataTypes.STRING,
      ParentId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    },
    {}
  );
  VendorCategory.associate = models => {
    VendorCategory.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return VendorCategory;
};
