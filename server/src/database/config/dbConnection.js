const Sequelize = require('sequelize')


const { DATABASE_URL } = process.env


const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: true,
});

(async () => {
  try {
    await sequelize.authenticate()
    console.log('Successfully Connected to DB');

  } catch (error) {
    console.error('Failed to connect to DB', error);
  }
})()


module.exports = { sequelize }