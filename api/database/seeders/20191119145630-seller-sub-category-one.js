'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SellerSubCategoryOnes', [{
        name: 'Laptop Skins',
        SellerSubCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Laptop screens',
        SellerSubCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('SellerSubCategoryOnes', null, {});
  }
};