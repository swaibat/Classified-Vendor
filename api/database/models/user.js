'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    adress: DataTypes.STRING,
    telephone: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    lastSeen: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};