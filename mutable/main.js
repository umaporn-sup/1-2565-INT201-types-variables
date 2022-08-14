//immutable primitive values
let str = 'hello'
str.toUpperCase //return 'HELLO'
console.log(str) // 'hello'
//the original string has not changed
console.log('-----------------------------')

// mutable object
let std = { firstname: 'Somchai', lastname: 'Rakdee' }
std.lastname = 'Deejai'
console.log(std) //{ firstname: 'Somchai', lastname: 'Deejai' }
let scores = [10, 25, 30, 50]
scores[0] = 5
scores[scores.length - 1] = 100
console.log(scores) //[ 5, 25, 30, 100 ]
