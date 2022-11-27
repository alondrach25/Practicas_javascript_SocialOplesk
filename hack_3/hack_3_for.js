/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

for(let iterar = 5; iterar >= 1; iterar--){
    result[5-iterar] = iterar
} 

//export result
module.exports = result;