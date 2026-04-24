const readline = require('readline')

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite sua idade: ", (idade) => {
    rl.question("Tem carteirinha? (True/False) ", (temCarteirinha) => {
        if (idade <= 12) {
            console.log("Valor: R$ 15,00")
        } else if (idade >= 13 && idade <= 25 && temCarteirinha) {
            console.log("Valor: R$ 20,00")
        } else if (idade >= 26 && idade <= 59) {
            console.log("Valor: R$ 30,00")
        } else {
            console.log("Valor: R$ 15,00")
        }
        rl.close()
    })
})