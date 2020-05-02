/**
 * Funciones
 * 
 * Crea una función que reciba un array y un número y 
 * devuelva cuántos números del array son mayores que 
 * el indicado por parámetro
 * 
 * 
 */


 // your code here!

"use strict";

const threshold = 5;
const values = [1,2,3,4,5,6,7,8];

 

function getHigherThan(valores, numero) {
    let contador = 0;

     for (let i=0; i<valores.length; i++) {
        if (valores[i] > numero) {
           contador++;
        }
        }
      return contador;
     }
     

const counter = getHigherThan(values, threshold);

console.log(`El número de valores mayores que ${threshold} es ${counter}`);

