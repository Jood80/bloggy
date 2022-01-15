const argon2 = require('argon2')
const dbConnection = require('../config/dbConnection')

const postUser = async ({ username, password, email, phone }) => {
  try {
    let hashedPassword = await argon2.hash(password)
    const sql = {
      text: 'INSERT INTO users(username, password, email, phone) VALUES ($1,$2,$3, $4)',
      values: [username, hashedPassword, email, phone],
    }
    return dbConnection.query(sql.text, sql.values)
  }
  catch (err) {
    throw new Error('Failed to add user to database')
  }
}

module.exports = postUser;