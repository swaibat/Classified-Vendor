'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerSubCategoryOne = sequelize.define('SellerSubCategoryOne', {
    name: DataTypes.STRING,
    SellerSubCategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  SellerSubCategoryOne.associate = function(models) {
    SellerSubCategoryOne.belongsTo(models.SellerSubCategory, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return SellerSubCategoryOne;
};