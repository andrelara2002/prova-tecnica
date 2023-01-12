const readline = require('readline')

console.clear()
console.log('EXERCICIO 05\n\n')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inversor = text => {
    const list = text.split('')
    let new_text = ''

    for (let i = list.length - 1; i >= 0; i--) {
        new_text += list[i]
    }
    return new_text
}

rl.question('Por favor, digite uma palavra: ', resposta => {
    console.log(`Palavra invertida: ${inversor(resposta)}`)
    rl.close()
})