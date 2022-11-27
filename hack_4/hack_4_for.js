/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

for(let iterar = 0; iterar < 4; iterar++){
    result[iterar] = (2*iterar)+1
}

//export result
module.exports = result;