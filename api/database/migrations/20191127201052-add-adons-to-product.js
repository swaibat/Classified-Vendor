'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Products', 'adons', Sequelize.JSONB );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products', 'adons', Sequelize.JSONB );
  }
};
