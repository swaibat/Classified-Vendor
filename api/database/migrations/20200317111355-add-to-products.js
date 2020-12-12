module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Products', 'views', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Products', 'discountPrice', {
      type: Sequelize.INTEGER,
    }),
    queryInterface.addColumn('Products', 'VendorId', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Products', 'variants', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Products', 'qauntity', {
      type: Sequelize.STRING,
    }),
  ]),
  down: async (queryInterface, Sequelize) => {}
};
