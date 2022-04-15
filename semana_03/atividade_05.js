//- Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function ano (idade){
    if (idade <= 2005){
        return `é maior de ${idade}`
    }else if (idade >= 2004){
        return `é menor de ${idade}`
    }
}
const nascimento = ano (1999)
console.log(nascimento)