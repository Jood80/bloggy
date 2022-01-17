
const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');


const Tweet = sequelize.define('tweet', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = { Tweet }