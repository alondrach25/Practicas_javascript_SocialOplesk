/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let iterar = 5;

while(iterar >= 1){
    result[5-iterar] = iterar
    iterar--
}

//export result
module.exports = result;