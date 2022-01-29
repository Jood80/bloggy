const { Tweet } = require('../../database/models');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params
    const userTweets = await Tweet.findAll({
      attributes: ['content', 'createdAt'],
      order: [
        ['createdAt', 'DESC'],
      ],
      where: {
        userId,
      },
    })
    res.status(200).json(userTweets)
  } catch (error) {
    next(error)
  }
}