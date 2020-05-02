/**
 * Hasta ahora solo hemos trabajado con cadenas de texto. Ahora introduciremos
 * los números.
 * 
 * Los números son un tipo de dato muy usado en cualquier aplicación. Al igual que 
 * las cadenas podemos asignarlos a variables y realizar operaciones propias de números, 
 * como sumas, divisiones, restas, etc.
 * 
 * Descomenta las siguientes variables y realiza la operación correspondiente. Escribe
 * en pantalla el resultado para comprobar que es correcto
 */

"use strict"
 
let a = '20';
let b = '10';

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





