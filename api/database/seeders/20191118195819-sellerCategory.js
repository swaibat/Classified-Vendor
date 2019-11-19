'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SellerCategories', [{
        name: 'houses',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Computers',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('SellerCategories', null, {});
  }
};
