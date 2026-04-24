let f = 1
function fatorial(n) {
    for (let i = (n - 1); i >= 1; i -= 1) {
        if (i === (n - 1)) {
            f = i * n
        } else {
            f *= i
        }
    }
    return f
}

console.log(fatorial(5))

// OR

function fatorial(n) {
    let f = 1
    for (let i = 2; i <= n; i++) {
        f *= i
    }
    return f
}

console.log(fatorial(5))