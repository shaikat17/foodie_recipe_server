const express = require('express')
const chefs = require('./public/chefs.json')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})