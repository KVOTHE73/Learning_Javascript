/**
 * 
 * Este ejercicio se trata de una variante del anterior donde,
 * en lugar de desplazar al array una unidad, lo haremos, N
 * veces.
 * 
 * 
 * Ejemplos:
 * 
 * Si N=1 (mismo caso del ejercicio anterior)
 * Array original: [1,2,3,4]
 * Array resultante: [4,1,2,3]
 * 
 * Si N=2
 * Array original: [1,2,3,4]
 * Array resultante: [3,4,1,2]
 * 
 */

"use strict";

let N=4;
let values = [1, 2, 3, 4, 5, 6, 7];
let output = [];

let i = [];

for (i=values.length-N; i<values.length; i++) {
    output.push(values[i]);
}

for (i=0; i<values.length-N; i++)  {
    output.push(values[i]);
}

console.log(output);
