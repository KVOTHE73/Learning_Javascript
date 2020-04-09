/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para prácticar con los arrays, se proponen las siguientes actividades:
 *    - calcula la media de los elementos que sean mayores o iguales que 5;
 * 
 */

"use strict";

const grades = [7.9, 9.11111, 1, 6];

let suma = 0;
let contador = 0;
let grade = 0;

for (grade of grades) {
    if (grade >= 5) {
        contador = contador +1
        suma = suma + grade
    }
}
console.log(contador);

console.log(suma);

let average = suma / contador

console.log(average);

