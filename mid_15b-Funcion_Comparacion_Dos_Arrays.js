/**
 * En un array tenemos las velocidades medias realizadas
 * por un vehículo durante un intervalo de tiempo. Cada entrada
 * en el array representa un tramo de carretera.
 * 
 * Otro array almacena las velocidades máximas permitidas para cada tramo.
 * 
 * La aplicación debe devolver:
 *     a) un array donde cada posición indica, con un booleano,
 *        si el vehículo respetó la velocidad media máxima de ese
 *        tramo o no;
 * 
 *     b) si por cada 10 km/h de más se penaliza al conductor con 2 puntos,
 *        ¿cuánto ha penalizado en total a lo largo del tramo?
 * 
 * 
 * Ejemplo:
 *    speeds =    [100, 105, 90, 130]
 *    maxSpeeds = [120, 120, 80, 120]
 * 
 *    El array resultante será
 *              [true, true, false, false] 
 *****MODIFICACION AL EJERCICIO ORIGINAL, CAMBIAMOS TRUE POR "MULTA" Y FALSE POR "NO MULTA"*****
 *  
 *    La penalización será: ((90-80) + (130-120))*2/10 = 4
 * 
 *  USAMOS FUNCIONES PARA RESOLVER EL EJERCICIO
 * 
 */

"use strict";

const speeds = [100, 105, 90, 130];
const maxSpeeds = [120, 120, 80, 120];
let i = 0;

function multaOnoMulta(speeds, maxSpeeds) {
    if (speeds <= maxSpeeds) {
        return speeds = "No Multa" 
        }    else {
        return speeds = "Multa";
    }
}

function calculatePenalizacion(speeds, maxSpeeds) {
    if (speeds > maxSpeeds) {
        return ((speeds - maxSpeeds) * 2) / 10;
        } else {
            return 0;
        }
}

let multa = [];
let penalizacion = 0;
let baremo = [];

for (let i=0; i<speeds.length; i++) {
    baremo = multaOnoMulta(speeds[i], maxSpeeds[i]);
    multa.push(baremo);
    penalizacion += calculatePenalizacion(speeds[i], maxSpeeds[i]);
}

console.log(`Multas por tramo: ${multa}`);

console.log(`La penalización será de ${penalizacion} puntos`);


