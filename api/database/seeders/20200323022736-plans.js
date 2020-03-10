export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Plans', [{
    name: 'Basic',
    amount: 10,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    duration: 'month',
    billingInterval: 'year',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Premium',
    amount: 20,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    duration: 'month',
    billingInterval: 'year',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Enterprise',
    amount: 50,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    duration: 'month',
    billingInterval: 'year',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Plans', null, {})
};
