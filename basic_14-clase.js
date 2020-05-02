/**
 * Escribe una aplicación que escriba por pantalla
 * la generación a la que pertenece una persona nacida
 * en el año indicado en la variable `birthYear`
 * 
 *   - Z (1995 - actualidad)
 *   - millenials (1981 - 1994)
 *   - generación X (1969 - 1980)
 *   - baby boom (1949 - 1968)
 * 
 */


 birthYear = 1970

 Z_START = 1995;
 MILLENIAL_START = 1981;
 X_START = 1969;
 BABY_BOOM_START = 1949;

//Mi solucion 
/**
if (birthYear > Z_START) {
        console.log("Z")
} else if (birthYear > MILLENIAL_START && birthYear < Z_START) {
        console.log("MILLENIAL")  
} else if (birthYear > X_START && birthYear < MILLENIAL_START) {
    console.log("X")  
} else {
    console.log("BABY BOOM")
}
*/

//La solucion del profesor
 
 if (birthYear > Z_START) {
     console.log('Z');
 } else if (birthYear > MILLENIAL_START) {
     console.log('millenial')
 } else if (birthYear > X_START) {
     console.log('X')
 } else {
     console.log('baby boom')
 }

