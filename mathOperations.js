// module.exports.mathOperations = {
//     add: (a, b) => {
//         return a + b
//     },
//     subtract: (a, b) => {
//         return a - b
//     },
//     multiply: (a, b) => {
//         return a * b
//     },
//     divide: (a, b) => {
//         if(b !== 0){
//             return a / b
//         }
//         return "value of b shuld not be 0"
//     }

// }
function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    if (b !== 0) {
        return a / b
    }
    return "value of b shuld not be 0"
}
module.exports= { add, subtract, multiply, divide }