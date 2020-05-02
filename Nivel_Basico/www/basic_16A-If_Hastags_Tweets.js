/**
 * ¿Cuáles son los `hastags` del tweet? 
 * 
 * Escribe el código necesario para extraer de las variables indicadas
 * los `hashtags` automáticamente.
 *   - asume que el texto del `hashtag` tiene 10 caracteres
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

const DEFAULT_HASHTAG_LENGTH = 10;

let tweet = tweet3;

const hastag = tweet.indexOf("#");
const hastag2 = tweet.indexOf("#", hastag+1);

if (hastag != -1) {
    let firstHastag = tweet.slice(hastag, hastag+11)
    let secondHastag = tweet.slice(hastag2, hastag2+11)
    console.log(firstHastag, secondHastag);
}
