/**
 * Arrays y funciones
 * 
 * Crea una función que reciba un array y busque en él
 * cuál es la secuencia de números positivos más larga. 
 * La función devolverá los índices de inicio y fin de 
 * dicha secuencia. Ejemplos:
 * 
 * 
 * [1,2,3,4,5,6] -> devuelve 0 y 5
 * [-1,-1,0,2,-1] -> devuelve 2 y 3
 * [1,1,1,-1,1,1,1,1,1] -> devuelve 4 y 8
 * 
 * Podemos hacer el ejercicio en dos fases:
 * 
 *    a) Supongamos que hay una sola secuencia de números positivos 
 *    b) Supongamos que hay un número indefinido de secuencias
 * 
 * 
 * ¿Cómo devuelvce una función varios valores? Hasta ahora las funciones
 * que hemos implementado devolvían un valor que podía ser una cadena o un número,
 * pero nada impide devolver, por ejemplo, un array. Así, para este ejercicio, 
 * nuestra función devolverá un array de dos posiciones, la primera representa
 * el inicio de la secuencia positiva y el segundo, el final. Ejemplo
 * 
 *   [-1,-1,0,2,-1] -> devuelve [2 ,3]
 * 
 */

 "use strict";
const values = [1,2,3,-4,5,6];
let newValues = [];

 for (let i=0; i<values.length; i++) {
     if (values[i] >= 0) {
         newValues.push(values[i]);
     }
 }

 console.log(newValues);
 