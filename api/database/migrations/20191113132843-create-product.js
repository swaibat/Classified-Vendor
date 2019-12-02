export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    UserId: {
      type: Sequelize.INTEGER
    },
    CategoryId: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
    negotiable: {
      type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Products')
};
