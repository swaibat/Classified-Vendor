export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Settings',
    [
      {
        sgKey:
            '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',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Settings', null, {})
};
