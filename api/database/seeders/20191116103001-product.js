

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [{
    name: 'phone',
    categoryId: 1,
    subCategoryId: 2,
    price: 200000,
    owner: 'seller@vendly.com',
    negotiable: true,
    description: 'No scratches',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'laptop',
    categoryId: 1,
    subCategoryId: 4,
    price: 23400,
    owner:'seller@vendly.com',
    negotiable: true,
    description: 'as good as new',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Products', null, {})
};
