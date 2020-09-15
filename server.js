const express = require('express')
const sendMail = require('./send')
const config = require('./config.json')

const server = express()
const port = 3000

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get('/api/send', async (req, res) => {
  const r = await sendMail(config)
  res.send(r)
})

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
