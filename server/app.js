const { join } = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static(join(__dirname, '..', 'client', 'build')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})
app.use(cors())

module.exports = app