const Sequelize = require('sequelize')
const { sequelize } = require('../config/dbConnection')

const User = sequelize.define('users', {
  id: {
    type: Sequelize.UUID,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING(35),
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