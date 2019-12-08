

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Chats',
    [
      {
        SenderId: 1,
        ReceiverId: 2,
        message: 'hello admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Chats', null, {})
};
