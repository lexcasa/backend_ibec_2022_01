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
module.exports = Calculadora;