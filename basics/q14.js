const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5]

let sum = 0
for (let n of notas) {
    sum += n
}

let med = sum / notas.length
console.log(`Média da Turma: ${med}`)

let aprovados = 0
for (let x of notas) {
    if (x >= med) {
        aprovados++
    }
}

console.log(`${aprovados} alunos ficaram acima da média`)