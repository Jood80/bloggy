const { getAllUsersTweets, postUser } = require('./users')
const { postTweet, getUserTweets } = require('./tweets')

module.exports = { getAllUsersTweets, postUser, postTweet, getUserTweets }