/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

result = [0,1,2,3].map(function(numero){
    return (2*(numero))+1;
})

//export result
module.exports = result;