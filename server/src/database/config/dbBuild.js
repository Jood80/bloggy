const { User, Tweet } = require('../models');
const { sequelize } = require('./dbConnection');
const data = require('./data.json');


const build = async () => {
  try {
    await sequelize.sync({ force: true })
    await sequelize.truncate({ cascade: true })

    const users = await Promise.all([
      ...data.users.map((user) => User.create(user))
    ])
    await Promise.all([
      ...data.tweets.map((tweet) => Tweet.create(tweet)),
    ]);
  } catch (error) {
    console.error('failed to fill data', error);
  }
}

build();

module.exports = { build }