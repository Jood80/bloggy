const { readFileSync } = require("fs")
const { join } = require("path")

const connection = require("./dbConnection")

const sql = readFileSync(join(__dirname, "dbBuild.sql")).toString()

connection
  .query(sql)
  .then(() => console.log("DB has been built successfully"))
  .catch(error => console.error("Faild to build the DB", error.stack))