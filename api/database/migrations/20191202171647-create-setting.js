
export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Settings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    logo: {
      type: Sequelize.STRING
    },
    slideImg: {
      type: Sequelize.STRING
    },
    companyName: {
      type: Sequelize.STRING
    },
    copyrightText: {
      type: Sequelize.STRING
    },
    customCss: {
      type: Sequelize.STRING
    },
    customJs: {
      type: Sequelize.STRING
    },
    sgKey: {
      type: Sequelize.STRING
    },
    emailTemplate: {
      type: Sequelize.STRING
    },
    googleKeys: {
      type: Sequelize.STRING
    },
    twilo_accountSid: {
      type: Sequelize.STRING
    },
    twilo_authToken: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Settings')
};
