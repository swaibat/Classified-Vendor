'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubCategoryOne = sequelize.define('SubCategoryOne', {
    name: DataTypes.STRING,
    SubCategoryId: DataTypes.INTEGER
  }, {});
  SubCategoryOne.associate = function(models) {
    SubCategoryOne.belongsTo(models.SubCategory, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return SubCategoryOne;
};