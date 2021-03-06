export default (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification',
    {
      subject: DataTypes.STRING,
      ReceiverId: DataTypes.INTEGER,
      message: DataTypes.STRING
    }, {});
  Notification.associate = models => {
    // associations can be defined here
  };
  return Notification;
};
