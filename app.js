//Inclusão do Módulo http nativo do Node
const http = require('http');

//Criação do servidor http
http.createServer( (req, res) => {
    res.write('Hola Mundo');
});