const hbs = require('hbs');

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