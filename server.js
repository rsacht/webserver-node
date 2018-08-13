const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  //res.send('Olá Mundo!')
   let saida = {
        nome: 'Rodrigo',
        idade: 35,
        url: req.url
    }

    res.send(saida);
    //Observe agora o Headers no Postman que a saída é JSON
    //e X-Powered-By-> Express
})
//Starte o server.js: nodemon server.js
//Configurando a mensagem de retorno ao estartar o servidor:
app.listen(3000, () => {
    console.log('Escutando requisições na porta 3000. Acesse: http://localhost:3000/')
});