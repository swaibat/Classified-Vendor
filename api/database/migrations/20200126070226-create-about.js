'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Abouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      company_duration: {
        type: Sequelize.STRING
      },
      company_employees: {
        type: Sequelize.STRING
      },
      company_images: {
        type: Sequelize.STRING
      },
      company_video: {
        type: Sequelize.STRING
      },
      company_description: {
        type: Sequelize.STRING
      },
      adons: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Abouts');
  }
};