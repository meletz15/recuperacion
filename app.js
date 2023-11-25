const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT

//utilizacion de Handlebars hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname + '/views/partials')

//servir contenido estatico public3 donde esta el templated
app.use(express.static('public2'))

//Enviando argumentos a home2
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/html_css', (req, res) => {
    res.render('html_css')
})

app.get('/JS_node', (req, res) => {
    res.render('JS_node')
})

app.get('/html_css', (req, res) => {
    res.sendFile(__dirname +'/public2/html_css.html')
})

app.get('/js_node', (req, res) => {
    res.sendFile(__dirname +'/public2/JS_node.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
})