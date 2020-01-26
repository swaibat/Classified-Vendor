export default (sequelize, DataTypes) => {
  const About = sequelize.define('About', {
    company_name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    company_duration: DataTypes.STRING,
    company_employees: DataTypes.STRING,
    company_images: DataTypes.STRING,
    company_video: DataTypes.STRING,
    company_description: DataTypes.STRING,
    adons: DataTypes.JSONB
  },
  {});
  About.associate = models => {
    // associations can be defined here
  };
  return About;
};
