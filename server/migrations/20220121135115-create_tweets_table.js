'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tweets", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable("tweets")
  }
};
