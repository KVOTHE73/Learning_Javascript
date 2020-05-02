/**
 * ¿Cuáles son los `hastags` del tweet? 
 * 
 * Escribe el código necesario para extraer de las variables indicadas
 * los `hashtags` automáticamente.
 *   - asume que hay, como mucho, dos tweets 
 * 
 * Para ello se propone el uso de las funciones de Javascript `indexOf` y `slice`:
 *   - `indexOf` devuelve la posición en la que se encuentra la cadena buscada
 *   - `slice` extrae un fragmento de una cadena
 * 
 * Ejemplos:
 * 
 *    name = 'Manolo Abreu'
 *    name.indexOf('Abreu')    // devuelve 7
 *    name.indexOf('Martínez')  // devuelve -1
 * 
 * Consultar:
 *    - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf
 */


"use strict"

const tweet1 = 'aprendiendo #javascript en  Vigo';
const tweet2 = 'empezando el segundo módulo del bootcamp!'
const tweet3 = 'hack a boss bootcamp vigo #javascript #codinglive';
const tweet4 = 'tweet con un solo hashtag al #final';


// esta solución no presupone ninguna longitud a los hashtags,
// así que es necesario averiguar donde acaba cada uno de ellos.
// Existen dos posibilidades:
//     - el hashtag está al final de la frase
//     - el hashtag está en medio de la frase
//
// En el segundo caso el el hashtag se encontrará entre una
// almohadilla y un espacio en blanco

let tweet = tweet3;

let hastag = tweet.indexOf("#");
let hastagEnd = tweet.indexOf("#", hastag+1);
let hastagEndPhrase = tweet.length;

if (hastag !=-1) {
    let firstHastag = tweet.slice(hastag, hastagEnd);
    let secondHastag = tweet.slice(hastagEnd, hastagEndPhrase)
    console.log(firstHastag, secondHastag);

}