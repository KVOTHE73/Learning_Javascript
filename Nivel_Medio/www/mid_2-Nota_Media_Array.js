/**
 * Operando con más de dos elementos
 * 
 * ¿Serías capaz de calcular la media de las notas contenidas en el 
 * siguiente array?
 */

"use strict"

const notas = [7.9, 9.11111, 1, 8];


let suma = 0;

let nota

for (nota of notas) {
    suma = nota + suma
}

let notaMedia = (suma / notas.length);

notaMedia = notaMedia.toFixed(2);

console.log(notaMedia);
