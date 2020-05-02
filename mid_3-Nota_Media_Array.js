/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para solucionar alguno de los inconvenientes enumerados en el ejercicio anterior
 * usaremos un `Array`. Un Array es una colección de elementos.
 *  
 * ¿Cómo podemos usar un `Array` para calcular la media de un conjunto de números,
 * independimiente de su número, sin modificar el código?
 * 
 * Para ello utilizaremos los `bucles`, que permiten iterar sobre los elementos de un
 * `Array`
 * 
 * Hay varios tipos de bucles, cuya idoneidad dependerá de cada situación. Para 
 * familiarizarte, trata de calcular la media de los números de un `Array`, usando 
 * los siguientes:
 * 
 *   - `for ... of` 
 *      (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#sentencia_for...of)
 * 
 *   - `for (let <variable>=<valor inicial>; <condición>; <acción al terminar la iteracción>)`
 *      https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#sentencia_for
 * 
 *   - `while (condición)` 
 *      (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#sentencia_while)
 */

"use strict"

const grades = [7.9, 9.11111, 1, 2];

let sum_grades = 0;

let grade

for (grade of grades) {
    sum_grades = sum_grades + grade
            
}

console.log(sum_grades);

let average = sum_grades / grades.length;

console.log(average);

