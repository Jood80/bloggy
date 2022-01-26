
'use strict';
const { v4: uuidv4 } = require('uuid')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.String,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
      username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      }
      , updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
