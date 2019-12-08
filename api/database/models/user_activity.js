export default (sequelize, DataTypes) => {
  const userActivity = sequelize.define('userActivity', {
    UserId: DataTypes.INTEGER,
    session: DataTypes.STRING,
    online: DataTypes.BOOLEAN,
    ip_address: DataTypes.STRING,
    agent: DataTypes.STRING,
    device: DataTypes.STRING
  }, {});
  userActivity.associate = models => {
    // associations can be defined here
  };
  return userActivity;
};
