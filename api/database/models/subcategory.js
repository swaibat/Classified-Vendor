/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const SubCategory = sequelize.define('SubCategory', {
    name: DataTypes.STRING,
    CategoryId: DataTypes.STRING
  }, {});
  SubCategory.associate = (models) => {
    SubCategory.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return SubCategory;
};
