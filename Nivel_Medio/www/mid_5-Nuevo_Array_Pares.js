/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para prácticar con los arrays, se proponen las siguientes actividades:
 *    - crea un nuevo array cuyos elementos sean los de las posiciones
 *      pares del array original
 * 
 * Nota: num es par si num%0 == 0
 */

"use strict"

const values = [2, 4, 6, 8, 10]
const output = [2,6,10]

let valuesPares = [];

let i = 0

for (i=0; i<values.length; i=i+2) {
        valuesPares.push(values[i]);
    }

    console.log(`output = ${valuesPares}`);

//Calcula la media

const grades = [1, 2, 3, 4]
let suma = 0;

for (i=0; i<grades.length; i=i+1) {
    suma = suma + grades[i]
}

const average = suma/grades.length

console.log(`Media = ${average}`);

