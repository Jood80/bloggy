const router = require('express').Router()
const { getAllUsers, postUser } = require('../controllers')

const { Error404, Error500 } = require('../helpers/errors');


router.get('/users', getAllUsers)
router.post('/tweet', postTweet)


router.use(Error404);
router.use(Error500);

module.exports = router
