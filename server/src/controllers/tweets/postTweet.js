const { Tweet } = require('../../database/models')

module.exports = async (req, res, next) => {
  try {
    const { content, userId } = req.body

    const newTweet = await Tweet.create({ content, userId })

    if (newTweet) {
      return res.status(201).send({
        message: 'Successfully created tweet'
      })
    }
    return res
      .status(409)
      .json({ message: 'Conflict occurs' })
  } catch (error) {
    next(error)
  }
}