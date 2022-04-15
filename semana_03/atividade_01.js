//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente

function diaDaSemana(numero){
    if(numero === '1'){
        console.log('domingo')
    } else if(numero === '2'){
        console.log('segunda-feira')
    } else if(numero === '3'){
        console.log('terça-feira')
    } else if(numero === '4'){
        console.log('quarta-feira')
    } else if(numero === '5'){
        console.log('quinta-feira')
    } else if(numero === '6'){
        console.log('sexta-feira')
    } else if(numero === '7'){
        console.log('sabado')
    } else {
        console.log ('não tem esse dia')
    }

    return numero

}

let queDiaEHoje = diaDaSemana ('8')
console.log(queDiaEHoje)