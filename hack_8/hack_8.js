/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let index_bar = arr.indexOf('bar'),
    index_qux = arr.indexOf('qux'),
    index_qux_nuevo = index_qux - index_bar;

result = (arr.slice(index_bar, index_qux + 1)).map((elemento) => {
    return elemento.replace("a","@")
});

result.splice(index_qux_nuevo,1,result[index_qux_nuevo].toUpperCase())

//export result
module.exports = result;