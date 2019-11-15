/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.INTEGER
  }, {});
  Category.associate = (models) => {
    // associations can be defined here
  };
  return Category;
};
