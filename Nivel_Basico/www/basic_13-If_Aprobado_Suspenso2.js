/**
 * El objetivo de este ejercicio es indicar, con letra, la nota media
 * de un estudiante a partir de sus tres notas parciales. Los intervalos
 * serán los siguientes:
 * 
 *    - de 0 a 4.9, SUSPENSO
 *    - de 5 a 5.9, APROBADO
 *    - de 6 a 6.9, BIEN
 *    - de 7 a 8.9, NOTABLE
 *    - de 9 a 10, SOBRESALIENTE
 */

 "use strict"

let grade1 = 1;
let grade2 = 7;
let grade3 = 10;
 
let notaMedia = (grade1 + grade2 + grade3) / 3;

console.log(notaMedia);

if (notaMedia >= 5 && notaMedia <= 5.9) {
    console.log("APROBADO");
}
if (notaMedia >= 6 && notaMedia <= 6.9) {
    console.log("BIEN");
}
if (notaMedia >= 7 && notaMedia <= 8.9) {
    console.log("NOTABLE");
}
if (notaMedia >= 9 && notaMedia <= 10) {
    console.log("SOBRESALIENTE");
}
else if (notaMedia < 5) {
    console.log("SUSPENSO");
}
