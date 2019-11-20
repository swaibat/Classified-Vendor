'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerSubCategory = sequelize.define('SellerSubCategory', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    SellerCategoryId: DataTypes.INTEGER
  }, {});
  SellerSubCategory.associate = function(models) {
    SellerSubCategory.hasMany(models.SellerSubCategoryOne, {
      foreignKey: 'SellerSubCategoryId',
      targetKey: 'id',
    });
    SellerSubCategory.belongsTo(models.SellerCategory, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return SellerSubCategory;
};