const data = require('../data/dados.json')

console.clear()
console.log('EXERCICIO 03\n\n')

const calcularMedia = (lista = []) => {

    let soma = 0, media = 0

    lista.forEach(numero => {
        soma += parseFloat(numero.valor)
    })

    media = soma / lista.filter(x => x.valor !== 0).length
    return { dia: 'x', valor: media }
}

const menor = data.sort((a, b) => a.valor - b.valor)[0]
const maior = data.sort((a, b) => b.valor - a.valor)[0]
const media = calcularMedia(data)


console.table({ menor, maior, media })