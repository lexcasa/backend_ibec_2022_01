const input     = [1,2,0,"B","B","C", ["A","A"], "C", "C"]
const input2    = ["B","B","C","A","A"]
let output  = []

// Output: ["B","C", ["A"]]
// Input: [1,2,0,"B","B","C", ["A","A"], ["A","A"], "C", "C"] -> Output: ["B","C", ["A"]]

const agruparItems = function (arr){
    let out = []
    for (let i = 0; i < arr.length; i++){
        let count = 0
        // Estamos diciendo que esto puede ser un array
        if( typeof arr[i] === 'object' && arr[i].length > 0){
            // console.log("ver array :", agruparItems(arr[i]) )
            out.push( agruparItems(arr[i]) )
        } else {
            for(let j = 0; j < arr.length; j++){
                if(arr[j] == arr[i]){
                    count++
                }
            }
            
            if(count > 1 && !out.includes(arr[i])){
                out.push( arr[i] )
            }
        }
    }
    return out
}

console.log("items agrupados - input2 ::", agruparItems(input2))
console.log("items agrupados - input ::", agruparItems(input))

// Est. del problema: arr: [item1, ..., subArr1, ..., itemN]
// subArr1: [item1, ..., itemJ]
// Prob completo:  [item1, ...,  [item1, ..., itemJ], ...,  [item1, ..., itemK], ..., itemN]

/// [1,2,0,"B","B","C", ["A","A"] ] 
// Arr1: [1,2,0,"B","B","C"]
// Arr2: [ ["A","A"] ]