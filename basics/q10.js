const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Defina as Variaveis")
rl.question("Variavel A: ", (a) => {
    rl.question("Variavel B: ", (b) => {
        rl.question("Variavel C: ", (c) => {

            a = Number(a)
            b = Number(b)
            c = Number(c)

            let max = 0
            if (b > a && b > c) {
                max = b
            } else if (c > a && c > b) {
                max = c
            } else {
                max = a
            }

            console.log(`${max} é o maior número entre ${a}, ${b} e ${c}.`)
            rl.close()
        })
    })
})