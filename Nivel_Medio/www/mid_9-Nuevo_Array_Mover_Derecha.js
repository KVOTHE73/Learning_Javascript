/**
 * Dado un array de números devuelve un nuevo 
 * array donde cada elemento se haya desplazado 
 * una posición hacia la derecha.
 * 
 * Ejemplo:
 * 
 * Array original: [1,2,3,4]
 * Array resultante: [4,1,2,3]
 * 
 * Nota cómo se trata de un desplazamiento circular,
 * donde el último elemento pasa a ser el primero
 */

"use strict";

let values = [1, 2, 3, 4];
let output = [];

output.push(values[values.length-1]);

for (let i=0; i<values.length-1; i++) {
    output.push(values[i]);
}

console.log(output);

