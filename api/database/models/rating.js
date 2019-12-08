export default (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    'Rating',
    {
      ReviewerId: DataTypes.INTEGER,
      VendorId: DataTypes.INTEGER,
      feedback: DataTypes.STRING,
      count: DataTypes.INTEGER
    },
    {}
  );
  Rating.associate = function(models) {
    Rating.belongsTo(models.User, {
      foreignKey: 'VendorId',
      targetKey: 'id',
      allowNull: false
    });
  };
  return Rating;
};
