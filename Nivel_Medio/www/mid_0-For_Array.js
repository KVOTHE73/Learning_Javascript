/**
 * Operando con más de dos elementos
 * 
 * El código que hemos escrito hasta ahora conoce de antemano
 * el número de variables que existen. En la práctica esto casi nunca
 * va a ser así. Pongamos como ejemplo el cálculo de una nota media. 
 * ¿Cómo sería el código si tenemos dos notas? ¿Y si son 4? ¿Y si son 93?
 * 
 */

"use strict"

const notas = [7.9, 9.1, 1, 2]

let suma = 0

let nota

for (nota of notas) {
    suma = suma + nota
}

let notaMedia = suma / notas.length

console.log(suma);

console.log(notaMedia);
