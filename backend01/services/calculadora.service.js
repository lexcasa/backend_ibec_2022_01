const Calculadora = {
    suma: function (a, b){
        return a + b
    },
    resta: function (a, b){
        return a - b
    },
    multi: function (a, b){
        return a * b
    },
    divi: function (a, b){
        if(b != 0){
            return a / b
        }
        return 'error'
    }
}
console.log("suma: ", Calculadora.suma(1, 2))
// console.log("sumatoria: ", Calculadora.sumatoria([1,2,2]))
module.exports = Calculadora;