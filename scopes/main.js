// block scope
{
  let x = 2
  const y = 2
  var z = 2
}
// console.log(x) //x is not defined because cannot be used outside block
// console.log(y) //y is not defined because cannot be used outside block
console.log(z) //can use z because var variable can be accessed from outside the block
console.log('--------------------')

//function scope
// code here can NOT use all studentNames
function myFunction() {
  let studentName1 = 'Somchai'
  const studentName2 = 'Somsak'
  var studentName3 = 'Somsri'
  console.log(studentName1)
  console.log(studentName2)
  console.log(studentName3)
}
myFunction()
// code here can NOT use all studentNames
// console.log(studentName1)
// console.log(studentName2)
// console.log(studentName3)
console.log('--------------------')

//global scope
let num1 = 10
const num2 = 20
var num3 = 30

function testGlobalScope() {
  console.log(num1)
  console.log(num2)
  console.log(num3)
  num1++
  // num2++ //constant cannot change value
  num3++
}

testGlobalScope()
console.log(num1)
console.log(num2)
console.log(num3)
