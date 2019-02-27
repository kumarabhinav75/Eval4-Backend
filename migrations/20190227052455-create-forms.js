'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      formname: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.TIME
      },
      field: {
        type: Sequelize.JSON
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('forms');
  }
};