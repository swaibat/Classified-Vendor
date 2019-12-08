export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Ratings',
    [
      {
        ReviewerId: 3,
        VendorId: 2,
        feedback: 'hello admin',
        count: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Ratings', null, {})
};
