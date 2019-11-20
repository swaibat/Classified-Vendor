'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Products', 'SellerCategoryId', Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Products','SellerCategoryId');
  }
};
