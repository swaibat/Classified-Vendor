
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Currencies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    timestamp: {
      type: Sequelize.STRING
    },
    base: {
      type: Sequelize.STRING
    },
    rates: {
      type: Sequelize.JSONB
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Currencies')
};
