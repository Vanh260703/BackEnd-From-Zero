const express = require('express') // commonjs
const app = express() // app express
const path = require('path');
require('dotenv').config()

const port = process.env.PORT || 8888; 
const hostname = process.env.HOST_NAME;

// Khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//config template engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug')

//config static files: img/css/js
app.use(express.static(path.join(__dirname, 'public')))


app.get('/abc', (req, res) => {
    // res.send('check ABC')
    res.render('sample.ejs')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})