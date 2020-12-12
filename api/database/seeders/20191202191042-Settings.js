export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Settings',
    [
      {
        logo: null,
        slideImg: null,
        companyName: null,
        copyrightText: null,
        customCss: null,
        customJs: null,
        sgKey: null,
        emailTemplate: null,
        googleKeys: null,
        twilo_accountSid: null,
        twilo_authToken: null,
        twilo_serviceId: null,
        currency: 'Euro',
        currencyCountry: 'BE',
        currencyFlagDisplay: true,
        autoCurrency: true,
        autoProductApproval: true,
        currencyDisplayBy: 'code',
        fixerKeys: null,
        autoCurrencyRate: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Settings', null, {})
};
