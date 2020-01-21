export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Categories',
    [
      {
        name: 'vehicles',
        slug: 'vehicles',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'property',
        slug: 'property',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mobile Phones & Tablets',
        slug: 'phones&tabs',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electronics',
        slug: 'electronics',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fashion',
        slug: 'fashion',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Services',
        slug: 'services',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animals & Pets',
        slug: 'animals',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Agriculture & Foods',
        slug: 'agriculture',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Commercial Equipments & Tools',
        slug: 'equipments',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Plastics',
        slug: 'plastics',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gifts & Toys',
        slug: 'gifts',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Health & Beauty',
        slug: 'health',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // =========[ vehicles ]=================15
      {
        ParentId: 1,
        name: 'Cars',
        slug: 'cars',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Buses',
        slug: 'buses',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Motocycles & scooters',
        slug: 'motocycles',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Trucks & Trailers',
        slug: 'trucks',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Tractors',
        slug: 'tractors',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Watercraft & Boats',
        slug: 'watercraft',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =========[ sub property ]=================21
      {
        ParentId: 2,
        name: 'Houses & Apartments for rent',
        slug: 'Rentals',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Houses & Apartments for sale',
        slug: 'houses for sale',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Land & Plots for rent',
        slug: 'land for rent',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Land & Plots for sale',
        slug: 'land for sale',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Commercial Propety for rent',
        slug: 'Commercial for rent',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Commercial Propety for sale',
        slug: 'Commercial for sale',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =========[ sub mobile phones ]=================21
      {
        ParentId: 3,
        name: 'mobile phones',
        slug: 'phones',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 3,
        name: 'tablets',
        slug: 'tablets',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 3,
        name: 'smart watches',
        slug: 'watches',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 3,
        name: 'Phone & Tabs accessories',
        slug: 'accessories',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // =========[ sub electronics ]=================21
      {
        ParentId: 4,
        name: 'computers',
        slug: 'computers',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 4,
        name: 'Tv and Equipments',
        slug: 'Tv',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 4,
        name: 'Gaming & Consoles',
        slug: 'gaming',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 4,
        name: 'Cameras & accessories',
        slug: 'cameras',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 4,
        name: 'Computer Hardware & accessories',
        slug: 'computer Hardware',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Office & School Supplies',
        slug: 'office',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // =========[ sub electronics ]=================21
      {
        ParentId: 5,
        name: 'bags',
        slug: 'bags',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'clothing',
        slug: 'clothing',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'jwellery',
        slug: 'jwellery',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'shoes',
        slug: 'shoes',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'watches',
        slug: 'watches',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'accessories',
        slug: 'accessories',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // services
      {
        ParentId: 6,
        name: 'jobs',
        slug: 'jobs',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'cleaning services',
        slug: 'cleaners',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'Hospitals & clinics',
        slug: 'Hospitals',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'schools',
        slug: 'schools',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'cars for Hire',
        slug: 'cars Hire',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'Drivers for Hire',
        slug: 'driver Hire',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'photos & Video coverage',
        slug: 'video coverage',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'Party decorators',
        slug: 'decorators',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'Public address systems',
        slug: 'Public address',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'party entertainers',
        slug: 'entertainers',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'catering services',
        slug: 'catering',
        UserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {})
};
