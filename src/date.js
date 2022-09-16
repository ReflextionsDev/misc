// Parsing dates and times
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let dateNow = Date.now()
let dateNew= new Date()
console.log('date', dateNew)
// date.parse() returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.
console.log('dateParse', Date.parse(dateNew))
console.log('dateString', dateNew.toString())

const start = new Date(1663346658000)
const now = new Date()

console.log(start.getMinutes())
console.log(start.toString())

const elapsed = now - start

console.log(elapsed)
console.log(new Date(elapsed).getMinutes())
