
const { Pool } = require('pg')
require('env2')('./config.env');

const connectionString = process.env.DATABASE_URL;
console.log("connectionString", connectionString);

if (!connectionString) throw new Error('Connection to DataBase was not successfull')

module.exports = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
})