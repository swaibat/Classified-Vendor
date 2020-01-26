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
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
// export default {
//   up: async (queryInterface, Sequelize) => {
//     try {
//       await queryInterface.addColumn('Settings', 'fixerKeys', Sequelize.STRING),
//         await queryInterface.addColumn('Settings', 'currency', Sequelize.STRING),
//         await queryInterface.addColumn('Settings', 'currencyFlagDisplay', Sequelize.STRING),
//         await queryInterface.addColumn('Settings', 'autoCurrency', Sequelize.BOOLEAN),
//         await queryInterface.addColumn('Settings', 'autoProductApproval', Sequelize.BOOLEAN),
//         await queryInterface.addColumn('Settings', 'currencyDisplayBy', Sequelize.STRING),
//         await queryInterface.addColumn('Settings', 'autoCurrencyRate', Sequelize.BOOLEAN);
//       return Promise.resolve();
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   },

//   down: (queryInterface, Sequelize) => { }
// };
