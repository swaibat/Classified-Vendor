export default (sequelize, DataTypes) => {
  const Favourite = sequelize.define('Favourite', {
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  Favourite.associate = models => {
    // associations can be defined here
  };
  return Favourite;
};
