//Inclusão do Módulo http nativo do Node
const http = require('http');

//Criação do servidor http
http.createServer( (req, res) => {
    
    //Definindo o retorno da aplicação em JSON
    res.writeHead(200,{'Content-Type': 'application/json'});
    let saida = {
        nome: 'Rodrigo',
        idade: 35,
        url: req.url
    }

    res.write(JSON.stringify(saida));
    //Teste a saída no navegador e no postman:http://localhost:8080/
    //No Postman veja o Content-Type em Headers:application/json
    
    //res.write('Olá Mundo!');
    //Precisamos dizer que já terminamos a resposta 
    res.end();
})
//Configuração da porta que o servidor irá escutar
.listen(8080);

//Retorno caso o servidor suba corretamente
console.log('Escutando na porta 8080. Acesse: localhost:8080');
