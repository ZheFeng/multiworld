import express from 'express'
import * as path from 'path'

const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, '../dist')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})