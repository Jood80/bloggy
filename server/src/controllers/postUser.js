const postUserQuery = require("../model/queries/postUser")

module.exports = async (req, res) => {
  try {
    const { username, password, email, phone } = req.body
    const results = await postUserQuery({ username, password, email, phone })
    if (results.rowCount === 1) {
      return res.status(200).send({ message: 'Successfully created user' })
    }
    return res
      .status(409)
      .json({ message: 'Conflict occurs' })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to add user to database' })
  }

}