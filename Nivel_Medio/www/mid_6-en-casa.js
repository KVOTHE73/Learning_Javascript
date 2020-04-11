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

//Opcion 1

let i = [];

for (i=0; i<numbers.length; i++) {
    if (numbers[i] < min ) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(min, max);

//Opcion 2

let number = [];

for (number of numbers) {
    if (numbers < min) {
        min = numbers;
    }
    if (numbers > max) {
        max = numbers;
    }
}
console.log(min, max);

