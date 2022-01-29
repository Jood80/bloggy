const { join } = require('path')
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const router = require('./src/routes')

const app = express()

app.use(express.static(join(__dirname, '..', 'client', 'build')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({
  origin: process.env.WHITELIST,
  methods: process.env.ALLOWED_METHODS,
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
  maxAge: 86400,
}))

app.use(compression());
app.use('/api', router);

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'))
})

module.exports = app