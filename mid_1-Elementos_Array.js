/**
 * Operando con más de dos elementos
 * 
 * Para solucionar alguno de los inconvenientes enumerados en el ejercicio anterior
 * usaremos un `Array`. Un Array es una colección de elementos entre corchetes:
 *
 *     miArray1 = [34, 90, 1, 0, 100]
 *     miArray2 = ['a', 'hola', 'rrr']
 *  
 * El número de elementos de cada array no está fijado de antemano, se pueden 
 * añadir y eliminar durante la ejecución de una aplicación. Además, `Javascript`
 * nos permite saber información sobre los arrays:
 *    - ¿Cuál es su longitud?
 *    - ¿Cuál es el primer elemento?
 *    - ¿Cuál es el elemento en cada una de las posiciones?
 * 
 */

"use strict";

const miArray1 = [34, 90, 1, 0, 100]

console.log(`Longitud = ${miArray1.length}`);

console.log(`Primer elemento: ${miArray1[0]}`);
console.log(`Segundo elemento: ${miArray1[1]}`);
console.log(`Tercer elemento: ${miArray1[2]}`);
console.log(`Cuarto elemento: ${miArray1[3]}`);
console.log(`Quinto elemento: ${miArray1[4]}`);
console.log(`Elemento 1000: ${miArray1[1000]}`);