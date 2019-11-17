

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Roles', [{
    name: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'supplier',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'buyer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'both',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Roles', null, {})
};
