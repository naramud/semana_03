// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se esse numero é par ou ímpar.

function divisão(imparPar){
    if (imparPar %2 == 0){
        return `${imparPar} par` 
    } else {
        return`${imparPar} impar`
    }
}
const resultado = divisão (1)
console.log(`o resulutado é ${resultado}`)