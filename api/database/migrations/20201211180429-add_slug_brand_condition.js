module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Products', 'slug', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Products', 'brand', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Products', 'condition', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Products', 'currency', {
      type: Sequelize.STRING,
    }),
  ]),

  down: async (queryInterface, Sequelize) => {},
};
