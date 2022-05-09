import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <html>
        <head>
            <meta charset="utf-8"/>
        </head>
        <body>
            <div id="app"></div>
            <script src="https://multiworld.oss-cn-beijing.aliyuncs.com/dist/app.bundle.js"></script>
            <script type="text/javascript">
            window.start('app');
            </script>
        </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})