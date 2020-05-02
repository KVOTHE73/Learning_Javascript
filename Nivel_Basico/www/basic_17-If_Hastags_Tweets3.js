/**
 * Imagina que estás haciendo un sistema de clasificación
 * automática de tweets. Se trata de un sistema que, a partir 
 * del texto de un tweet, asigna automáticamente una serie de etiquetas.
 * 
 * Esta clasificación se realiza de acuerdo a las siguientes reglas:
 *     - si el tweet tiene las palabras: PSOE, PP, Podemos, VOX, CS, entonces
 *       asignará la etiqueta 'POLÍTICA'
 *     - si el tweet tiene algunas de las palabras Javascript, PHP o Python,
 *       la etiqueta será 'PROGRAMACIÓN'
 * 
 * El objetivo de este ejercicio es analizar cada tweet y escribir la etiqueta
 * generada por pantalla.
 * 
 * Nota: al avanzar en el curso podremos elaborar una versión más
 * sofisticada de este ejercicio
 */

"use strict"

let tweet1 = 'aprendiendo #javascript en Vigo';
let tweet2 = 'empezando el segundo módulo del bootcamp!';
let tweet3 = 'en un giro de los acontecimientos VOX y Podemos llegan a un acuerdo';
let tweet4 = 'no hay quien entienda php, me paso a Java';
let tweet5 = 'deja su militancia en el PSOE para dedicarse a su pasión por la programación en Javascript';

let tweet = tweet2.toUpperCase();
let politica = false
let programacion = false

/** 
 * VERSION BASICA
 * 
if (tweet.indexOf("JAVASCRIPT") != -1 || tweet.indexOf("PHP") != -1 || tweet.indexOf("PYTHON") != -1 )
    {
        programacion = true; 
    }
if (tweet.indexOf("PSOE") != -1 || tweet.indexOf("PP") != -1 || tweet.indexOf("PODEMOS") != -1 || tweet.indexOf("VOX") != -1 || tweet.indexOf("CS") != -1) {
        politica = true
}   
if (programacion && politica) {
    console.log("El tweet es de ambos");
}
if (programacion && !politica) {
    console.log("El tweet es de programación");
}
if (!programacion && politica) {
    console.log("El tweet es de política");
}
else if (!programacion && !politica) {
    console.log("El tweet no es de ninguno");
}
*/

//VERSION SOFISTICADA

console.log(tweet);

console.log((typeof(tweet)));

tweet = tweet.split(" ");

console.log(tweet);

console.log((typeof(tweet)));

console.log(tweet[1]);

let word = [];
let hastag = [];

for (word of tweet) {
    if ((word = "JAVASCRIPT") || (word = "PHP") || (word = "PYTHON")) {
    hastag = "El tweet es de programación";
    }
    else if ((word = "PODEMOS") || (word = "PSOE") || (word = "PP") || (word = "CS") || (word = "VOX")) {
    hastag = "El tweet es de política";
    }
    else {
    hastag = "El tweet no es de ninguno"
    }
}
console.log(hastag);
