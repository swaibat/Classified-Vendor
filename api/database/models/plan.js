
export default (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    duration: DataTypes.STRING,
    billingInterval: DataTypes.STRING,
    adons: DataTypes.JSONB
  }, {});
  Plan.associate = (models) => {
    // associations can be defined here
  };
  return Plan;
};
