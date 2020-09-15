const express = require('express')
const sendMail = require('./send')
const config = require('./config.json')

const server = express()
const port = 3000

// for parsing application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true })) 

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get('/api/send', async (req, res) => {
  const r = await sendMail(config)
  res.send(r)
})

server.post('/api/send', async (req, res) => {
  if (req.body.fromEmail.trim()) {
    config.data.from.email = req.body.fromEmail
  }
  if (req.body.toEmail.trim()) {
    config.data.personalizations[0].to[0].email = req.body.toEmail
  }
  if (req.body.subject.trim()) {
    config.data.personalizations[0].subject = req.body.subject
  }
  if (req.body.content.trim()) {
    config.data.content[0].value = req.body.content
  }
  const r = await sendMail(config)
  res.send(r)
})

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
