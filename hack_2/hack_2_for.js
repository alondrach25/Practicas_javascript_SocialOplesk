/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

for (let iterar = 1; iterar <= 5; iterar++){
    result[iterar-1] = iterar
}

//export result
module.exports = result;