/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];
let limite = str.length;
let iterar = 0;

while(iterar <= limite-1){
    result[iterar] = str[iterar]
    iterar++
}

//export result
module.exports = result;