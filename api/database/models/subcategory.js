/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const subCategory = sequelize.define('subCategory', {
    name: DataTypes.INTEGER
  }, {});
  subCategory.associate = (models) => {
    // associations can be defined here
  };
  return subCategory;
};
