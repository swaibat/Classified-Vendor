export default (sequelize, DataTypes) => {
  const About = sequelize.define('About', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    startDate: DataTypes.STRING,
    employees: DataTypes.STRING,
    images: DataTypes.STRING,
    video: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {});
  About.associate = models => {
    About.belongsTo(models.User, {
      foreignKey: 'UserId',
      targetKey: 'id',
      allowNull: false
    });
  };
  return About;
};
