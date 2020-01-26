module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Currencies', [
    {
      timestamp: '1581095285',
      base: 'EUR',
      rates: '{ }',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ],
  {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
