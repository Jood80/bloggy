const router = require('express').Router()
const { getAllUsers, postUser, postTweet, getUserTweets } = require('../controllers')

const { Error404, Error500 } = require('../helpers/errors');


router.get('/tweets/:userId', getUserTweets)
router.post('/tweet', postTweet)
router.post('/users', postUser)
router.get('/feed', getAllUsers)


router.use(Error404);
router.use(Error500);

module.exports = router
