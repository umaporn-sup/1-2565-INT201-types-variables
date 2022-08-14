// Type Conversions
// implicit conversion
const conv1 = 10 + ' rooms'
const conv2 = '4' * 5
const conv3 = 'a' - 2
const conv4 = !'Hello'
console.log(conv1)
console.log(conv2)
console.log(conv3)
console.log(conv4)
console.log('---------------')
//explicit conversion
// to Number type
console.log(Number('3'))
console.log(Number('-3'))
console.log(Number('1.5'))
console.log(Number(''))
console.log(Number(true))
console.log(Number(false))
console.log(Number(undefined))
console.log(Number(null))
console.log('---------------')
//to String type
console.log(String(true))
console.log(String(false))
console.log(String(-5))
console.log(String(1))
console.log(String(0))
console.log(String(undefined))
console.log(String(null))
console.log('---------------')
//to Boolean type
console.log(Boolean('abc'))
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean([]))
console.log(Boolean([1]))
console.log(Boolean(['a']))
console.log(Boolean(undefined))
console.log(Boolean(null))
