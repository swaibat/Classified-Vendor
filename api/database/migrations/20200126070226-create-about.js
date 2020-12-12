
export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Abouts', {
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
    startDate: {
      type: Sequelize.STRING
    },
    employees: {
      type: Sequelize.STRING
    },
    images: {
      type: Sequelize.STRING
    },
    video: {
      type: Sequelize.STRING
    },
    description: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Abouts')

};
