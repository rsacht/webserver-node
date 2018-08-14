const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

//Express HBS engine 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Helpers
hbs.registerHelper('getAno',() => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar',(texto) => {
    //Criando um array de palavras
    let palavras = texto.split(' ');
    palavras.forEach((palavra, idx) =>{
        palavras[idx] = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    });
    //Juntar novamente o array separando-o com um espaço
    return palavras.join(' ');
});

//Rotas
app.get('/', (req, res) => {
    res.render('home',{
        nome: 'Rodrigo',
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log('Escutando requisições na porta 3000. Acesse: http://localhost:3000/')
});