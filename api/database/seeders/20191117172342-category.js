'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categories', [{
        name: 'Vehicles',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Property',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Health & Beauty',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Services',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Jobs',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Animals & Pets',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Repair & Construction',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Agriculture & Foods',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Commercial Equipments & Tools',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Services',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Mobile Phones & Tablets',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Gifts & Toys',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Chemicals & Plastics',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Office & School Supplies',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        name: 'Packaging & Advertising',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
          name: 'Fashion',
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories', null, {});
  }
};
