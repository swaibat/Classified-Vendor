export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Categories',
    [
      {
        name: 'vehicles',
        slug: 'vehicles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'property',
        slug: 'property',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mobile Phones & Tablets',
        slug: 'phones&tabs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electronics',
        slug: 'electronics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fashion',
        slug: 'fashion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Services',
        slug: 'services',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animals & Pets',
        slug: 'animals',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Agriculture & Foods',
        slug: 'agriculture',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Commercial Equipments & Tools',
        slug: 'equipments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Plastics',
        slug: 'plastics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gifts & Toys',
        slug: 'gifts',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Health & Beauty',
        slug: 'health',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // =========[ vehicles ]=================15
      {
        ParentId: 1,
        name: 'Cars',
        slug: 'cars',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Buses',
        slug: 'buses',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Motocycles & scooters',
        slug: 'motocycles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Trucks & Trailers',
        slug: 'trucks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Tractors',
        slug: 'tractors',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 1,
        name: 'Watercraft & Boats',
        slug: 'watercraft',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =========[ sub property ]=================21
      {
        ParentId: 2,
        name: 'Houses & Apartments for rent',
        slug: 'Rentals',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Houses & Apartments for sale',
        slug: 'houses for sale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Land & Plots for rent',
        slug: 'land for rent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Land & Plots for sale',
        slug: 'land for sale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Commercial Propety for rent',
        slug: 'Commercial for rent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 2,
        name: 'Commercial Propety for sale',
        slug: 'Commercial for sale',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =========[ sub mobile phones ]=================21
      {
        ParentId: 3,
        name: 'mobile phones',
        slug: 'phones',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 3,
        name: 'tablets',
        slug: 'tablets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 3,
        name: 'smart watches',
        slug: 'watches',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 3,
        name: 'Phone & Tabs accessories',
        slug: 'accessories',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // =========[ sub electronics ]=================21
      {
        ParentId: 4,
        name: 'computers',
        slug: 'computers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 4,
        name: 'Tv and Equipments',
        slug: 'Tv',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 4,
        name: 'Gaming & Consoles',
        slug: 'gaming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 4,
        name: 'Cameras & accessories',
        slug: 'cameras',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 4,
        name: 'Computer Hardware & accessories',
        slug: 'computer Hardware',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Office & School Supplies',
        slug: 'office',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // =========[ sub electronics ]=================21
      {
        ParentId: 5,
        name: 'bags',
        slug: 'bags',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'clothing',
        slug: 'clothing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'jwellery',
        slug: 'jwellery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'shoes',
        slug: 'shoes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'watches',
        slug: 'watches',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 5,
        name: 'accessories',
        slug: 'accessories',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // services
      {
        ParentId: 6,
        name: 'jobs',
        slug: 'jobs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'cleaning services',
        slug: 'cleaners',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'Hospitals & clinics',
        slug: 'Hospitals',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'schools',
        slug: 'schools',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'cars for Hire',
        slug: 'cars Hire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'Drivers for Hire',
        slug: 'driver Hire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'photos & Video coverage',
        slug: 'video coverage',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'Party decorators',
        slug: 'decorators',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'Public address systems',
        slug: 'Public address',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'party entertainers',
        slug: 'entertainers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ParentId: 6,
        name: 'catering services',
        slug: 'catering',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {})
};
