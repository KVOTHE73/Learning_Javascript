/**
 * Elimina los duplicados
 * 
 * Ejemplo:
 *   - Array entrada: [1,2, 2, 3, 4 ,4, 1]
 *   - Array salida:  [1,2,3,4]
 * 
 */

"use strict";

let imput = [1,2, 2, 3, 4 ,4, 1];
let imput2 = [];
let output = [];

for (let i=0; i<imput.length; i++) {
    if (imput[i] !== imput[i+1, imput.length]) {
    output.push(imput[i])    
    }
}
console.log(output);

let value = [];

for (value of imput) {
    if (value !== value+1, imput.length) {
        output.push(value);
    }
}

console.log(output);

