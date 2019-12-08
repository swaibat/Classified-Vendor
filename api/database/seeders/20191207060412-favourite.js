module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Favourites',
    [
      {
        UserId: 1,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Favourites', null, {})
};
