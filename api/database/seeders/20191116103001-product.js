export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [{
    name: 'Harrier kawundo',
    CategoryId: 16,
    price: 200000,
    UserId: 2,
    negotiable: true,
    description: 'No scratches',
    adons: `{
        "make": "Toyota",
        "model": "Harrier",
        "fuel": "petrol",
        "transmission": "automatic",
        "year": "2019",
        "mileage": 234500,
        "engine": 2000,
        "color": "silver"
      }`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: '2007 MERCEDES-BENZ GL-CLASS GL550 4MATIC',
    CategoryId: 1,
    price: 200000,
    UserId: 2,
    negotiable: true,
    description: '[Registration Year/month] is a registration date in Japan',
    adons: `{
        "make": "Toyota",
        "model": "Harrier",
        "fuel": "petrol",
        "transmission": "automatic",
        "year": "2019",
        "mileage": "40,190 km",
        "engine": "5,460cc",
        "Drive": "4wheel drive",
        "color": "Maroon",
        "Registration Year/month":"2007/11"
      }`,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'house for rent in kigali',
    CategoryId: 2,
    price: 23400,
    UserId: 2,
    negotiable: true,
    description: 'as good as new',
    adons: `{
      "New Property": "No",
      "Bedrooms": 2,
      "Bathrooms": 2,
      "Parking Lot": "yes",
      "Furnished": "No",
      "Pets allowed": "No"
    }`,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Products', null, {})
};
