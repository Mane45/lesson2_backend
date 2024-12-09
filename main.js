//Task 1: Implementing a Described Module
const string = require("./stringUnits")
const reverse = string.stringUnits.reverse("hello")
const capitalize = string.stringUnits.capitalize("hello")
const truncate = string.stringUnits.truncate("hello", 3)
console.log(reverse)
console.log(capitalize)
console.log(truncate)

//Task 2: Debugging a Module Based on a Description
const operators = require("./mathOperations")
const add = operators.add(4,5)
const subtract = operators.subtract(4,5)
const multiply = operators.multiply(4,5)
const divide = operators.divide(4,5)
console.log(add)
console.log(subtract)
console.log(multiply)
console.log(divide)

//Task 3: Expanding a Module Based on a Description
const array = require("./arrayUtils")
const uniqueArray = array.unique([4,4,4,45,8,7,7])
const flattenArray = array.flatten([1,2,5,[0,7,8],"fgjhlghjlg"])
const chunk = array.chunk([4,5,47,7,8,8,78,8,112], 3)
console.log(uniqueArray)
console.log(flattenArray)
console.log(chunk)

