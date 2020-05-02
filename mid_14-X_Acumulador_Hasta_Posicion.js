/**
 * Un transportista hace paradas cada hora para tomarse
 * un descanso. Su vehículo es eléctrico por lo que aprovecha
 * algunas de las paradas para recargar la batería. 
 * 
 * Los kilómetros recorridos cada hora se representan en un array.
 * Si bajo ningún concepto el vehículo puede llegar a los 300km
 * sin recargar, ¿cuándo tiene que realizar las paradas?
 *
 * 
 * Ej.: [100, 50, 90, 100, 80, 80, 100]
 *     - tiene que recargar a las 3 y a las 6 horas de haber salido
 *     - [3, 6]
 */

"use strict";

const MAX_KM = 300;
const sections = [100, 50, 90, 100, 80, 80, 100];
let stops = [];
let accumulator = 0;
//recorrer el array y acumular hasta 300
//al llegar a 300 contar las paradas acumuladas y meter el numero resultante en stops

for (let i=0; i<sections.length; i++) {
    accumulator = accumulator + sections[i];
    
    console.log(accumulator);

        if (accumulator > MAX_KM ) {
            accumulator = sections[i];
            stops.push(i);
        }

    }
    
console.log(stops);


