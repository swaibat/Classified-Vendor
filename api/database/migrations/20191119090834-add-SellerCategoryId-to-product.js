

export default {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Products', 'VendorCategoryId', Sequelize.INTEGER),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Products', 'VendorCategoryId')
};
