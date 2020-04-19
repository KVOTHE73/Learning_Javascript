/**
 * Dado un array de números, devuelve un nuevo array
 * cuyo valores sean la suma acumulada de todos los valores
 * desde la primera posición hasta la actual.
 * 
 * Ejemplo:
 *   - Array entrada: [1,2,3,4]
 *   - Array salida:  [1,3,6,10]
 * 
 */

"use strict";

let values = [1,2,3,4];
let output = [];
let accumulator = 0;
let i = [];

for (i=0; i<values.length; i++) {
    accumulator = accumulator + values[i];
    output.push(accumulator);
    
    
}

console.log(output);