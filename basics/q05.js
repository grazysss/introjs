const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Insira uma temperatura: ', (C) => {
    let F = C * 9/5 + 32
    console.log(`${C}°C equivale a ${F}°F`)
    rl.close()
})