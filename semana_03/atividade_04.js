// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return `${numero} é par.`
        } else {
            return `${numero} é impar`
        }
}

const resultado = parOuImpar(34)
console.log(resultado)