const Saludo = {
    saludar: function (nombre){
        return "Hola " + nombre
    }
}
console.log("Saludo :: ", Saludo.saludar("alex"))
module.exports = Saludo