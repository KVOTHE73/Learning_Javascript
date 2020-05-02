/**
 * Procesando cadenas: subcadenas
 * 
 * Otra operación habitual sobre las cadenas es extraer una parte de ellas
 * 
 * Ejercicios:
 *    - Dada una palabra, genera otra que contenga la primera mitad
 *    - Ídem, pero generando la segunda mitad 
 *    - Genera una palabra donde se haya eliminado la primera y última letra
 *
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/slice
 */

"use strict";

let name = 'Fernando';

let firstPart = name.slice(0, (name.length / 2));

console.log(`Primera Parte = ${firstPart}`);

let secondPart = name.slice((name.length / 2), name.length);

console.log(`Segunda Parte = ${secondPart}`);

let middlePart = name.slice(1, name.length-1);

console.log(`Parte del Medio = ${middlePart}`);
