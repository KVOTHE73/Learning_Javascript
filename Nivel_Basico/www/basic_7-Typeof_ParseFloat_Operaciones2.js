/**
 * ¿Cambia el resultado si los números los ponemos entre comillas,
 * como si fueran cadenas?
 * 
 * Repite el ejercicio, observa el resultado y razona sobre él.
 * 
 */

"use strict"

let a = '10';
let b = '3';

console.log(typeof(a));
console.log(typeof(b));

a = parseFloat(a);
b = parseFloat(b);

console.log(typeof(a));
console.log(typeof(b));

const suma = a + b;
const resta = a - b;
const division = a / b;
const multiplicacion = a * b;
const resto = a % b;

console.log(`Suma = ${suma}`);
console.log(`Resta = ${resta}`);
console.log(`División = ${division}`);
console.log(`Multiplicación = ${multiplicacion}`);
console.log(`Resto = ${resto}`);