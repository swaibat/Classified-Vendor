export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Faqs',
    [
      {
        question: 'What is classified vendor?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Where does it come from?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Where can I get some?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why do we use it?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Faqs', null, {})
};
