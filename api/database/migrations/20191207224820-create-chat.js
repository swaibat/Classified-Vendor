
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Chats', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    SenderId: {
      type: Sequelize.INTEGER
    },
    ReceiverId: {
      type: Sequelize.INTEGER
    },
    message: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Chats')
};
