const router = require('express').Router()
const { postUser, postTweet, getUserTweets, getAllUsersTweets } = require('../controllers')

const { Error404, Error500 } = require('../helpers/errors');


router.get('/tweets/:userId', getUserTweets)
router.post('/tweet', postTweet)
router.post('/users', postUser)
router.get('/feed', getAllUsersTweets)


router.use(Error404);
router.use(Error500);

module.exports = router
