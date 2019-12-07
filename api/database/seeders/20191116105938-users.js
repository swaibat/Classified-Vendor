const password = '$2b$10$ed9qlAP/kO3ND6AORh7p/.HLhLfqRG90gvydR8aXPgjP.MfdpihK.';
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'admin',
          lastName: 'admin',
          email: 'admin@vendly.com',
          password,
          company: 'vendly',
          roleId: 1,
          telephone: '0758307272',
          address: 'kampala',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'seller',
          lastName: 'seller',
          email: 'seller@vendly.com',
          password,
          company: 'mambo',
          roleId: 2,
          telephone: '0758307272',
          address: 'kampala',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'buyer',
          lastName: 'buyer',
          email: 'buyer@vendly.com',
          password,
          company: 'bounty',
          roleId: 3,
          telephone: '0758307272',
          address: 'kampala',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'both',
          lastName: 'both',
          email: 'both@vendly.com',
          password,
          company: 'vendly',
          roleId: 4,
          telephone: '0758307272',
          address: 'kampala',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
