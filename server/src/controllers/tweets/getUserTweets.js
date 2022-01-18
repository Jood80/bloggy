const { Tweet } = require('../../database/models');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.params
    const allTweets = await Tweet.findAll({
      where: {
        userId,
      },
      include: [{ model: Tweet, as: "tweets" }]
    })
    res.json({ allTweets })
  } catch (error) {
    next(error)
  }
}