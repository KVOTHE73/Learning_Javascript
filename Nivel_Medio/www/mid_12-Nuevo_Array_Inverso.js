/**
 * Crear otro array en orden inverso
 * 
 * Ejemplo:
 *   - Array entrada: [1,2,3,4]
 *   - Array salida:  [4,3,2,1]
 * 
 * Dos formas:
 *   - for
 *   - buscar info en MDN sobre las funciones de Arrays
 */

"use strict";

let input = [1, 20, 3, 14];
//           0   1  2   3

let output2 = [];

let i = [];

for (i=input.length - 1; i>=0; i--) {
    output2.push( input[i] );
  }
 
  console.log(output2);
 
let output = input.reverse();

console.log(output);




