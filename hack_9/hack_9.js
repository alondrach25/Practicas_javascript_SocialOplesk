/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

arr.forEach(element => {
    if (element[0]=="b") {
        return result++;
    }
});

//export result
module.exports = result;