

export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user_activities', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    UserId: {
      type: Sequelize.INTEGER
    },
    session: {
      type: Sequelize.STRING
    },
    online: {
      type: Sequelize.BOOLEAN
    },
    ip_address: {
      type: Sequelize.STRING
    },
    agent: {
      type: Sequelize.STRING
    },
    device: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('user_activities')
};
