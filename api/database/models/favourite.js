export default (sequelize, DataTypes) => {
  const Favourite = sequelize.define('Favourite', {
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  Favourite.associate = models => {
    Favourite.belongsTo(models.User, {
      foreignKey: 'UserId',
      targetKey: 'id',
      allowNull: false
    });
  };
  return Favourite;
};
