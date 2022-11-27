/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let iterar = 0;

while(iterar <= 3){
    result[iterar] = (2*iterar)+1
    iterar++
}

//export result
module.exports = result;