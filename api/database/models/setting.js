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
      twilo_serviceId: DataTypes.STRING,
      currency: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'EURO'
      },
      currencyCountry: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'BE'
      },
      currencyFlagDisplay: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      autoCurrency: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      autoProductApproval: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      currencyDisplayBy: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'code'
      },
      fixerKeys: DataTypes.STRING,
      autoCurrencyRate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
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
