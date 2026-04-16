function parOuImpar(n) {
    if (n % 2 === 0) { // % resto - === igualdade
        return (`${n} é PAR`) // ${} uso d let no return
    }
    else {
        return (`${n} é IMPAR`)
    }
}

function somar(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) { // x++ incrementa 1
        sum += i
    }
    return sum 
}

function maior(a, b, c) {
    if (a > b && a > c) { // && and
        return (`${a} é o maior número`)
    } else if (b > a && b > c) { // else if === elif
        return (`${b} é o maior número`)
    } else {
        return (`${c} é o maior número`)
    }
}

function somaPares(n) {
    let sum = 0
    for (let i = 2; i <= n; i++)  {
        if (i % 2 === 0) {
            sum += i
        } 
    }        

    return sum
}

function contagem(n) {
    for (let i = 0; i <= n; i++) {
        console.log(n - i)
    }
    return ""
}

function nPrimo(n) {
    if (n < 2) {
        return (`${n} não é um número primo`)
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return (`${n} não é um número primo`)
        }
    }

    return (`${n} é um número primo`)
}

function nmaxArray(n, w, x, y, z) {
    const list = [n, w, x, y, z]
    let maior = list[0]

    for (let i = 1; i < list.length; i++) {
        if (list[i] > maior) {
            maior = list[i];
        }
    }

    return maior
}

function tabuada(n) {
    console.log('TABUADINHA!!!')
    for (let i = 1; i <= 10; i++) {
        answer = n * i
        console.log(`| ${n} x ${i} = ${answer}`)
    }
    return ""
}

// console.log(function(paramet)) === print(def(paramet))
// console.log(parOuImpar(18))
// console.log(somar(5))
// console.log(maior(150, 20, 50))
// console.log(somaPares(6))
// console.log(contagem(10))
// console.log(nPrimo(13))
// console.log(nmaxArray(5, 8, 9, 2, 10))
// console.log(tabuada(2.5))