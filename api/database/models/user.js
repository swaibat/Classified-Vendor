/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    lastSeen: DataTypes.DATE,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
