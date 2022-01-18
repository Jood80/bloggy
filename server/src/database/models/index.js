const { User } = require('./User')
const { Tweet } = require('./Tweet')


User.hasMany(Tweet, { foreignKey: 'userId', as: 'tweets' })
Tweet.belongsTo(User, { foreignKey: 'userId', as: 'users' })


module.exports = { User, Tweet };
