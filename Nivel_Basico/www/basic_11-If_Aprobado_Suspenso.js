/**
 * Tipos de condiciones
 * 
 * En el ejercicio anterior vimos un tipo de concreto de condición, 
 * el `mayor o igual (>=)`, pero hay más:
 *     - mayor (>)
 *     - menor (<)
 *     - menor o igual (<=)
 *     - igual (===)
 *     - distinto (!==)
 * 
 * ¿Serías capaz de obtener el mismo resultado cambiando la condición?
 * 
 */

"use strict"

 let notaMedia = 6;

if (notaMedia >= 5) {
    console.log("APROBADO");
    }
if (notaMedia === 5) {
    console.log("APROBADO");
    }
else if (notaMedia < 5) {
    console.log("SUSPENSO"); 
    }

 