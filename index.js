const express = require('express')
const app = express()

app.get('/app', (req, res) => {
  res.send('works')
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`service started on port ${PORT}`)
})
