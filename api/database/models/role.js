export default (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role', {
      name: DataTypes.STRING
    }, {}
  );
  Role.associate = models => {
    Role.belongsTo(models.User, {
      foreignKey: 'id',
      targetKey: 'roleId',
      allowNull: false
    });
  };
  return Role;
};
