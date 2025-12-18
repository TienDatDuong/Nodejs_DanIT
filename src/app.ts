import 'dotenv/config' // dùng do phần ts config đã thiết lập sẵn co esModuleInterop
import webRouter from './router/web'
//require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

//cấu hình ejs
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//config body body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//config static file
app.use(express.static('public'))

//config router
webRouter(app)




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
