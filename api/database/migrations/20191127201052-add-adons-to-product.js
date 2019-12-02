export default {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Products', 'adons', Sequelize.JSONB),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Products', 'adons', Sequelize.JSONB)
};
