export default (sequelize, DataTypes) => {
  const Page = sequelize.define(
    'Page',
    {
      CategoryId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      aboutUs: DataTypes.TEXT,
      backdrop: DataTypes.STRING,
      faq: DataTypes.TEXT,
      company: DataTypes.STRING
    },
    {}
  );
  Page.associate = models => {
    Page.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Page.hasMany(models.Product, {
      foreignKey: 'UserId',
      targetKey: 'id'
    });
  };
  return Page;
};
