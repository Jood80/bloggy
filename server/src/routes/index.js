const router = require('express').Router()
const postUser = require('../controllers/postUser')
const postTweet = require('../controllers/postTweet')
const getAllTweets = require('../controllers/getAllTweets')
const { Error404, Error500 } = require('../helpers/errors');


router.get('/tweets', getAllTweets)
router.post('/tweet', postTweet)
router.post('/users', postUser)


router.use(Error404);
router.use(Error500);

module.exports = router
