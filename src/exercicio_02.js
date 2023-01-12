const readline = require('readline')


console.clear()
console.log('EXERCICIO 02\n\n')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fibonacci = numero => {
    const seq = []

    for (let i = 0; i <= numero; i++) {
        seq[i] = i <= 1
            ? i
            : seq[i - 1] + seq[i - 2]

        if (seq[i] > numero) return false
        if (seq[i] === numero) return true
    }
}

rl.question('Por favor, informe um número: ', resposta => {

    try {
        console.log(
            fibonacci(parseInt(resposta))
                ? 'O número faz parte da sequência de fibonacci'
                : 'O número não faz parte da sequência de fibonacci'
        )
    } catch (error) {
        console.log('Por favor, escreva um número')
    }
    rl.close()
})