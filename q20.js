function calculadora(a, b, operacao) {
    switch (operacao) {
        case "soma": console.log(a + b);
        break
        case "subtracao": console.log(a - b);
        break
        case "multiplicacao": console.log(a * b);
        break
        case "divisao": console.log(a / b);
        break
        default: 
        console.log("Não realizamos essa operação!")
    }
}

calculadora(10, 12, "multiplicacao")

const operacoes = [
    { a: 10, b: 5, op: "soma" },
    { a: 20, b: 4, op: "divisao" },
    { a: 7, b: 0, op: "divisao" },
    { a: 3, b: 8, op: "multiplicacao" }
]

for (let continhas of operacoes) {
    calculadora(continhas.a, continhas.b, continhas.op)
}