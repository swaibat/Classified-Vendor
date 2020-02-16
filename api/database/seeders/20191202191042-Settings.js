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
        sgKey: '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',
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
