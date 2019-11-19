/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {});
  Category.associate = (models) => {
    Category.hasMany(models.SubCategory, {
      foreignKey: 'CategoryId',
      targetKey: 'id',
    });
    Category.hasMany(models.Vehicle, {
      foreignKey: 'CategoryId',
      targetKey: 'id',
    });
  };
  return Category;
};
