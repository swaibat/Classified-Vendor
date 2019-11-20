'use strict';
module.exports = (sequelize, DataTypes) => {
  const SellerCategory = sequelize.define('SellerCategory', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  SellerCategory.associate = function(models) {
    SellerCategory.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
    SellerCategory.hasMany(models.SellerSubCategory, {
      foreignKey: 'SellerCategoryId',
      targetKey: 'id',
    });
  };
  return SellerCategory;
};