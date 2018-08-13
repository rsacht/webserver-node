//Inclusão do Módulo http nativo do Node
const http = require('http');

//Criação do servidor http
http.createServer( (req, res) => {
    res.write('Olá Mundo!');
    //Precisamos dizer que já terminamos a resposta 
    res.end();
})
//Configuração da porta que o servidor irá escutar
.listen(8080);

console.log('Escutando na porta 8080. Acesse: localhost:8080');
//Teste a subida do servidor executando o comando: node app
//Acesse o navegador e acesse: localhost:8080
//Saída: Olá Mundo!