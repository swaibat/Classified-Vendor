module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Plans', 'duration', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Plans', 'billingInterval', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Plans', 'condition', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Plans', 'currency', {
      type: Sequelize.STRING,
    }),
  ]),

  down: async (queryInterface, Sequelize) => {},
};
