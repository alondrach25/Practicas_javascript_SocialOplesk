/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
let tamano_number = numberArray.length,
    tamano_string = stringArray.length,
    tamano_result = tamano_number + tamano_string;

result = numberArray.concat(stringArray);

for (let index = 0; index <= tamano_result-1; index++){
    switch (result[index]) {
        case 1:
            result[index] = "one";
            break;
        case 3:
            result[index] = "three";
            break;
        case 5:
            result[index] = "five";
            break;
        case "foo":
            result[index] = "f00";
            break;
        case "bar":
            result[index] = "Bar";
            break;
        case "baz":
            result[index] = "b@z";
            break;
        case "qux":
            result[index] = "quX";
            break;
        case "echo":
            result[index] = "3ch0";
            break;                            
    }
}

result.unshift("h@ck")
result.splice(tamano_number + 1, 0, "h@ck")
result.push("h@ck")

//export result
module.exports = result;