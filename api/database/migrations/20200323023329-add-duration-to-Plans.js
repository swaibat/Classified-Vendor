module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Plans',
        'duration',
        {
          type: Sequelize.STRING
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Plans',
        'billingInterval',
        {
          type: Sequelize.STRING
        },
        { transaction }
      );
      await transaction.commit();
      return Promise.resolve();
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
      }
      return Promise.reject(err);
    }
  },

  down: async (queryInterface, Sequelize) => {}
};
