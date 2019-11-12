'use strict';
module.exports = (sequelize, DataTypes) => {
  const subCategory = sequelize.define('subCategory', {
    name: DataTypes.INTEGER
  }, {});
  subCategory.associate = function(models) {
    // associations can be defined here
  };
  return subCategory;
};