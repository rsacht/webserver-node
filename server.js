const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

//Express HBS engine 
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home');

});

app.listen(3000, () => {
    console.log('Escutando requisições na porta 3000. Acesse: http://localhost:3000/')
});