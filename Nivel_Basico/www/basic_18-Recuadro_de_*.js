/**
 * Repaso
 * 
 * En este ejercicio hará falta usar todo lo aprendido hasta ahora
 * El objetivo es escribir en pantalla una ficha de estudiante
 * con el siguiente aspecto:
 * 
 *     **********************
 *     * Manolo Pérez Gómez *
 *     *                    *
 *     *        8.3         *
 *     *     (APROBADO)     *
 *     **********************
 * 
 * Notas:
 *    - notad que tanto la nota numérica como textual están centradas
 *    - vuestro código debe funcionar para cualquier nombre y apellidos,
 *      independientemente de su longitud
 *    - podéis hacer uso de la función `repeat`: 
 *      https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/repeat
 */   

"use strict"

let name = 'Manolo';
let surname1 = 'Pérez';
let surname2 = 'Gómez';

let grade1 = 9.1;
let grade2 = 9.8;

let fullName = `* ${name} ${surname1} ${surname2} *`;
let character = "*"
let character2 = " "
let firstLine = character.repeat(fullName.length);
let secondLine = fullName
let thirdLine = `*${character2.repeat(fullName.length-2)}*`;
let average = (grade1 + grade2) / 2;
average = average.toFixed(1);
let fourLine = `*${character2.repeat((fullName.length-5)/2)}${average}${character2.repeat((fullName.length-6)/2)} *`
let result 
let fiveLine
if (average >= 5) {
    result = "(SUFCIENTE)";
    fiveLine = `* ${character2.repeat((fullName.length-15)/2)}${result}${character2.repeat((fullName.length-13)/2)} *`;}
if (average >=6) {
    result = "(BIEN)";
    fiveLine = `* ${character2.repeat((fullName.length-10)/2)}${result}${character2.repeat((fullName.length-10)/2)} *`;}
if (average >=7)  {
    result = "(NOTABLE)";
    fiveLine = `* ${character2.repeat((fullName.length-13)/2)}${result}${character2.repeat((fullName.length-12)/2)} *`;}
if (average >=9)  {
    result = "(SOBRESALIENTE)";
    fiveLine = `* ${character2.repeat((fullName.length-19)/2)}${result}${character2.repeat((fullName.length-18)/2)} *`;}
else {result = "(SUSPENSO)";
    fiveLine = `* ${character2.repeat((fullName.length-13)/2)}${result}${character2.repeat((fullName.length-13)/2)} *`;}

let lastLine = character.repeat(fullName.length);

console.log(firstLine);
console.log(secondLine);
console.log(thirdLine);
console.log(fourLine);
console.log(fiveLine);
console.log(lastLine);




