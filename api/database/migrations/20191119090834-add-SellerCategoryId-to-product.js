export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products',
      'VendorCategoryId',
      Sequelize.INTEGER
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products', 'VendorCategoryId');
  }
};
