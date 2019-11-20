'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pages', [{
        CategoryId: 7,
        SubCategoryId: 20,
        UserId: 2,
        aboutUs: 'lorem ipsum',
        backdrop: null,
        faq: 'lorem ipsum',
        company:'vendly',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('SubCategoryOnes', null, {});
  }
};