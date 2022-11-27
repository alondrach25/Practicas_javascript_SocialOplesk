/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman";
let result = [];
let limite = str.length;

for(let iterar = 0; iterar <= limite-1; iterar++){
    result[iterar] = str[iterar]
}

//export result
module.exports = result;