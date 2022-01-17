const { getAllUsers, postUser } = require('./users')
const { postTweet, getUserTweets } = require('./tweets')

module.exports = { getAllUsers, postUser, postTweet, getUserTweets }