const input = ["B","B","C","A","A"]
let output  = []

// Algoritmo de agrupamiento:
// Si encuentro un elemento repetido
// Solo el elemento dentro del output
// Deberes: Como resolver en un FOR solo

for (let i = 0; i < input.length; i++){
    let count = 0
    for(let j = 0; j < input.length; j++){
        if(input[j] == input[i]){
            count++
        }
    }
    
    if(count > 1 && !output.includes( input[i])){
        output.push( input[i] )
    }
}

console.log("output: ", output)