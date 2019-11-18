'use strict';
module.exports = (sequelize, DataTypes) => {
  const SupplierCategory = sequelize.define('SupplierCategory', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  SupplierCategory.associate = function(models) {
    // associations can be defined here
  };
  return SupplierCategory;
};