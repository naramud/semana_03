//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

function resultadoBoletim(nota1, nota2, nota3){ 
    const media = (nota1 + nota2 + nota3)/3

    if(media >= 7 && media <= 10) {
        return `Aprovada, sua mendia é ${media}`
    } else if (media >= 5 && media < 7) {
        return `recuperação, sua media é ${media}`
    } else if (media < 5 && media >= 0){
        return `reprovado, sua media é ${media}`
    }

}
console.log(resultadoBoletim(6, 7, 4, 8))