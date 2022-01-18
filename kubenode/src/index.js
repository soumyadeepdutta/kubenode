const express = require('express')
const {hostname} = require('os')
const app = express()

app.get('/app', (req, res) => {
  res.send(`reponse from ${hostname}`)
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`service started on port ${PORT}`)
})
