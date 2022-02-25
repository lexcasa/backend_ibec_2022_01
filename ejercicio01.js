const input = ["B","B","C","A","A"]
let output  = []

// Algoritmo de agrupamiento:
// Si encuentro un elemento repetido
// Solo el elemento dentro del output
// Deberes: Como resolver en un FOR solo

const arrMap = {}
// hashmap: key -> value
// obj: {key: 1}
for (let i = 0; i < input.length; i++){
    let count = 0
    
    if(input.includes(input[i])){
        // variable = (si variable existe) ? true : false
        // i = 0 -> input[0] -> "B"
        // arrMap["B"] = arrMap["B"] ? arrMap["B"] + 1 : 1 -> arrMap["B"] vale 1
        // i = 1 -> input[1] -> "B" -> arrMap["B"] vale 2

        arrMap[ input[i] ] = arrMap[ input[i] ] ? arrMap[ input[i] ] + 1 : 1
    }
    
    if(arrMap[ input[i] ] > 1 && !output.includes( input[i])){
        output.push( input[i] )
    }
}

console.log("output: ", output)