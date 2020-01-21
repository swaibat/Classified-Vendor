export default (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    icon: DataTypes.STRING,
    ParentId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  Category.associate = models => {
    Category.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Category;
};
