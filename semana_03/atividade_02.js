// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais"

function igualOuMaior (numero){
    if(numero === 5){
        console.log('numero é igual a 5')
    } else if(numero >= 5) {
        console.log('numero é maior que 5')
    } 
    
}
let calculo = igualOuMaior (6)
console.log(`o numero é ${calculo}`)