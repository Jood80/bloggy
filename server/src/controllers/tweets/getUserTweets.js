const { Tweet } = require('../../database/models');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params
    const allTweets = await Tweet.findAll({
      where: {
        user_id: id
      }
    })
    res.json({ allTweets })
  } catch (error) {
    next(error)
  }
}