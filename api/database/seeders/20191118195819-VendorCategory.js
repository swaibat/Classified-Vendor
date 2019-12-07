export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'VendorCategories',
      [
        {
          name: 'houses',
          slug: 'houses',
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'computers',
          UserId: 2,
          slug: 'computers',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'cars',
          UserId: 1,
          slug: 'cars',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'accesories & spares',
          UserId: 1,
          slug: 'accessories',
          ParentId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VendorCategories', null, {});
  }
};
