/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para prácticar con los arrays, se proponen las siguientes actividades:
 *    - Obtén los valores mínimo y máximo de un array de números
 * 
 */

"use strict";

let numbers = [1,2,4,5,6,7,8,9,13,14];

let min = numbers[0];
let max = numbers[0];

let i

for (i=0; i<numbers.length; i++) {
    if (i < min ) {
        min = i;
    }
    if (i > max) {
        max = i
    }
}
console.log(min, max);




/** 
let number

for (number of numbers) {
    if (numbers < numbers+1 && numbers<numbers-1) {
        output.push(number);
    }
}
console.log(output);
*/
