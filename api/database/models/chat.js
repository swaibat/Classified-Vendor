export default (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    SenderId: DataTypes.INTEGER,
    ReceiverId: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {});
  Chat.associate = (models) => {
    Chat.belongsTo(models.User, {
      foreignKey: 'SenderId',
      targetKey: 'id',
      allowNull: false
    });
    Chat.belongsTo(models.User, {
      foreignKey: 'ReceiverId',
      targetKey: 'id',
      allowNull: true
    });
  };
  return Chat;
};
