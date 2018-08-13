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
app.listen(3000)