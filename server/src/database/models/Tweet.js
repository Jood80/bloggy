const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');


const Tweet = sequelize.define('tweets', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = { Tweet }