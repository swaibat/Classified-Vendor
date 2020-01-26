export default (sequelize, DataTypes) => {
  const Setting = sequelize.define(
    'Setting',
    {
      logo: DataTypes.STRING,
      slideImg: DataTypes.STRING,
      companyName: DataTypes.STRING,
      copyrightText: DataTypes.STRING,
      customCss: DataTypes.STRING,
      customJs: DataTypes.STRING,
      sgKey: DataTypes.STRING,
      emailTemplate: DataTypes.STRING,
      googleKeys: DataTypes.STRING,
      twilo_accountSid: DataTypes.STRING,
      twilo_authToken: DataTypes.STRING,
      currency: {
        type: DataTypes.STRING,
        defaultValue: 'EURO'
      },
      currencyFlagDisplay: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      autoCurrency: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      autoProductApproval: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      currencyDisplayBy: {
        type: DataTypes.STRING,
        defaultValue: 'code'
      },
      fixerKeys: DataTypes.STRING,
      autoCurrencyRate: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
    },
    {}
  );
  Setting.associate = models => {
    // associations can be defined here
  };
  return Setting;
};
