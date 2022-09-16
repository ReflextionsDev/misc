// Handling floating-point numbers, especially around addition, multiplication, and rounding

let x = 3.1712
console.log(typeof x)
// Math.trunc = toFixed(0)
console.log(x.toFixed(1))
console.log(Math.round(x))
console.log(Math.ceil(x))


console.log('Dec Round', Math.round(x * 10) / 10)

console.log('Parse Float', parseFloat("12.12"))

function mult () {
    return 0.1 * 0.2
}

console.log(typeof parseFloat(mult().toPrecision(15)))

console.log((0.2 + 0.1))

let a = 0.1
let b = 0.2

console.log((a * 100 + b * 100)/ 100)