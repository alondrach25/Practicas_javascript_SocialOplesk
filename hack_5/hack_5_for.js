/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

for(let iterar = 3; iterar >=0; iterar--){
    result[3-iterar] = (2*(iterar)) + 1
}

//export result
module.exports = result;