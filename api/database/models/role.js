/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.INTEGER
  }, {});
  Role.associate = (models) => {
    // associations can be defined here
  };
  return Role;
};
