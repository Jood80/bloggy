const argon2 = require('argon2')
const { User } = require('../../database/models');


module.exports = async (req, res, next) => {
  try {
    const { username, email, password, phone, avatar } = req.body

    const hashedPassword = await argon2.hash(password)
    const newUser = await User.create({ username, email, password: hashedPassword, phone, avatar })
    if (newUser) {
      return res.status(201).send({
        message: 'Successfully created user',
        user: {
          id: newUser.dataValues.id,
          username: newUser.dataValues.username,
        },
      })
    }
    return res
      .status(409)
      .json({ message: 'Conflict occurs' })
  } catch (error) {
    console.error(error);
    next(error)
  }

}