function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2)
    return imc
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal"
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso"
    } else {
        return "Obesidade"
    }
}

console.log(classificarIMC(calcularIMC(65, 1.50)))
console.log(calcularIMC(65, 1.51))