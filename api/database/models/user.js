export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = models => {
    User.hasMany(models.Page, {
      foreignKey: 'UserId',
      targetKey: 'id'
    });
    User.hasMany(models.Product, {
      foreignKey: 'UserId',
      targetKey: 'id'
    });
    User.hasMany(models.Category, {
      foreignKey: 'UserId',
      targetKey: 'id'
    });
    User.hasMany(models.Rating, {
      foreignKey: 'VendorId',
      targetKey: 'id'
    });
    User.hasOne(models.About, {
      foreignKey: 'UserId',
      targetKey: 'id'
    });
    User.hasMany(models.Favourite, {
      foreignKey: 'UserId',
      targetKey: 'id'
    });
    User.hasOne(models.Role, {
      foreignKey: 'id',
      targetKey: 'roleId'
    });
  };
  return User;
};
