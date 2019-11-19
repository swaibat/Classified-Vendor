'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    fuel: DataTypes.STRING,
    transmission: DataTypes.STRING,
    year: DataTypes.STRING,
    mileage: DataTypes.INTEGER,
    engine: DataTypes.INTEGER,
    color: DataTypes.STRING,
    ProductId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {});
  Vehicle.associate = function(models) {
    Vehicle.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
    Vehicle.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return Vehicle;
};