const { isType } = require('../dist/util/is')
console.log(isType(1, 1))
class Person {

}
const person = new Person()
console.log(isType(person, Person))
console.log(isType(undefined, undefined))
console.log(isType(null, null))
console.log(isType(0, 0))
// console.log(typeof is)