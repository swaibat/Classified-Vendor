export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Pages',
      [
        {
          CategoryId: 7,
          UserId: 2,
          aboutUs: 'lorem ipsum',
          backdrop: null,
          faq: 'lorem ipsum',
          company: 'vendly',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pages', null, {});
  }
};
