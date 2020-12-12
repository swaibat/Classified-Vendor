module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
    }),
  ]),

  down: async (queryInterface, Sequelize) => {},
};
