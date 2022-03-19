const apellidos = {
    'casadevall': 'alex',
    'gonzalez': 'marco'
}
const Nombre = {
    obtenerApellido: (nombre) => {
        try {
            return apellidos[ nombre ]
        } catch (e){
            return 'Error'
        }
    }
}
module.exports = Nombre