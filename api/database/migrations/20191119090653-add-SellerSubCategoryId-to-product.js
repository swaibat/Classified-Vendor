'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Products', 'SellerSubCategoryId', Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Products','SellerSubCategoryId');
  }
};
