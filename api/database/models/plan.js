
export default (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    name: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    adons: DataTypes.JSONB
  }, {});
  Plan.associate = (models) => {
    // associations can be defined here
  };
  return Plan;
};
