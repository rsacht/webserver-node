const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

//Express HBS engine 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home',{
        nome: 'Rodrigo',
        ano: new Date().getFullYear()
    });
});
app.get('/about', (req, res) => {
    res.render('about',{
        ano: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escutando requisições na porta 3000. Acesse: http://localhost:3000/')
});