module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Products',
        'views',
        {
          type: Sequelize.INTEGER
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Products',
        'discountPrice',
        {
          type: Sequelize.INTEGER
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Products',
        'VendorId',
        {
          type: Sequelize.INTEGER
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Products',
        'tags',
        {
          type: Sequelize.STRING
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Products',
        'variants',
        {
          type: Sequelize.BOOLEAN
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Products',
        'quantity',
        {
          type: Sequelize.INTEGER
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Products',
        'chargeTax',
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
