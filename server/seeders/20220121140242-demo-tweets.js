'use strict';
const data = require('../src/database/config/data.json')

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('tweets', data.tweets, {})
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('tweets', null, {});
  }
};
