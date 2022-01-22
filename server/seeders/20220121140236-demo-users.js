'use strict';
const data = require('../src/database/config/data.json')

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('users', data.users, {})
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
