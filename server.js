const express = require('express')
const faker = require('faker')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000


app.set('view engine', 'ejs')  //setar que nossa engine será o ejs
app.use(expressLayouts) // definir que vai ser utilizado o express-ejs-layout
app.use(bodyParser.urlencoded()) // com essa configuracao, consigo parsear o corpo  das requisicoes


app.use (express.static(__dirname + '/public'))
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


//rotas
app.get('/',  (req,res) =>{
  res.render('pages/home')
})
