'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Vehicles', [{
        make: 'Toyota',
        model: 'Noah',
        fuel: 'petrol',
        transmission: 'automatic',
        year: '2019',
        mileage: 234500,
        engine: 2000,
        color: 'silver',
        ProductId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Vehicles', null, {});
  }
};