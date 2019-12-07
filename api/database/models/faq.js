export default (sequelize, DataTypes) => {
  const Faq = sequelize.define(
    'Faq',
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING
    },
    {}
  );
  Faq.associate = models => {
    // associations can be defined here
  };
  return Faq;
};
