import 'dotenv/config' // dùng do phần ts config đã thiết lập sẵn co esModuleInterop
//require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

//cấu hình ejs
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/abc', (req, res) => {
  res.send(`<h1 style="color: red">ABC DEF GHI</h1>`)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
