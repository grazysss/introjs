let primo = false
function ehPrimo(n) {
    if (n < 2) {
        primo = true
    } else {
        for (let i = 2; i <= (n ** 0.5); i++) {
            if (n % i === 0) {
                primo = false
            } else {
                primo = true
            }
        }
    }

    return primo
}

console.log(ehPrimo(12))