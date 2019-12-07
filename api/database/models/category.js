export default (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      icon: DataTypes.STRING,
      ParentId: DataTypes.INTEGER
    },
    {}
  );
  Category.associate = models => {};
  return Category;
};
