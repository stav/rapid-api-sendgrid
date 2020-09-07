const express = require('express')
const server = express()
const port = 3000

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
