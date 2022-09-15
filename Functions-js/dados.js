const prompt = require('prompt-sync')();

function dadosPacientes() {
    
const altString = prompt('Diga a sua altura: ')
const alt = Number(altString)

const pesoString = prompt('Diga o seu peso: ')
const peso = Number(pesoString)

imc = (alt * alt) / peso

return peso;
return alt;
return imc;
}

module.exports = dadosPacientes