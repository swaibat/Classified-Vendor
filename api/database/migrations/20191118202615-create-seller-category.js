export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('VendorCategories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    slug: {
      type: Sequelize.STRING
    },
    icon: {
      type: Sequelize.STRING
    },
    ParentId: {
      type: Sequelize.INTEGER
    },
    UserId: {
      type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('VendorCategories')
};
