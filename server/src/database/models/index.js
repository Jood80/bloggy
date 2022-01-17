const { User } = require('./user')
const { Tweet } = require('./tweet')


User.hasMany(Tweet, { foreignKey: 'user_id', as: 'tweets' })
Tweet.belongsTo(User, {
  foreignKey: 'user_id',
  as: "user"
})


module.exports = { User, Tweet };
