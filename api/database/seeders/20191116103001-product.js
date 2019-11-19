

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [{
    name: 'phone',
    CategoryId: 1,
    subCategoryId: 2,
    price: 200000,
    UserId: 2,
    negotiable: true,
    description: 'No scratches',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'laptop',
    CategoryId: 1,
    subCategoryId: 4,
    price: 23400,
    UserId:2,
    negotiable: true,
    description: 'as good as new',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Products', null, {})
};
