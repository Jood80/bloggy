const Sequelize = require('sequelize')
const { sequelize } = require('../config/dbConnection')

const User = sequelize.define('users', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
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
});

module.exports = { User }