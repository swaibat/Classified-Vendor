'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SellerSubCategories', [
        {
        SellerCategoryId:2,
        name: 'Laptops',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          SellerCategoryId:2,
          name: 'desktops',
          createdAt: new Date(),
          updatedAt: new Date()
          },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('SellerSubCategories', null, {});
  }
};