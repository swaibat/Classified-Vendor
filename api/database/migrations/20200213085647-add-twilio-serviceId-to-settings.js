export default {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Settings', 'twilo_serviceId', Sequelize.JSONB),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Settings', 'twilo_serviceId', Sequelize.JSONB)
};
