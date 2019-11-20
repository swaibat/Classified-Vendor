'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SubCategoryOnes', [{
        name: 'Land',
        SubCategoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Houses',
        SubCategoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Land',
        SubCategoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Houses',
        SubCategoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('SubCategoryOnes', null, {});
  }
};
