const { User, Tweet } = require('../../database/models');

module.exports = async (_req, res, next) => {
  try {
    const usersData = await User.findAll({
      attributes: ['id', 'username', 'avatar'],
      include: {
        model: Tweet, as: 'tweets',
        attributes: ['content']
      }
    })
    res.json({ usersData })
  } catch (error) {
    next(error)
  }
}