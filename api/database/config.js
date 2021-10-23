const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    logging: false
  },
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    logging: false
  },
  test: {
    use_env_variable: 'TEST_DB',
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    logging: false
  }
};
