console.clear()
console.log('EXERCICIO 04\n\n')

const data = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outros: 19849.53
}

let total = 0
const resposta = {}
const keys = Object.keys(data)

keys.forEach(key => total += data[key])
keys.forEach(key => resposta[key] = `${Math.round((data[key] * 100) / total)}%`)

console.table(resposta)

