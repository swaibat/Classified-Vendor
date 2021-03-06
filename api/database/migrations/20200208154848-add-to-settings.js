module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Settings',
        'fixerKeys',
        {
          type: Sequelize.STRING
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Settings',
        'currency',
        {
          type: Sequelize.STRING
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Settings',
        'currencyCountry',
        {
          type: Sequelize.STRING
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Settings',
        'currencyFlagDisplay',
        {
          type: Sequelize.BOOLEAN
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Settings',
        'autoCurrency',
        {
          type: Sequelize.BOOLEAN
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Settings',
        'autoProductApproval',
        {
          type: Sequelize.BOOLEAN
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Settings',
        'currencyDisplayBy',
        {
          type: Sequelize.STRING
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Settings',
        'autoCurrencyRate',
        {
          type: Sequelize.BOOLEAN
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
