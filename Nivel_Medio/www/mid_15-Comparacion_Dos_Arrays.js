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
 *              [false, false, true, true] 
 *****MODIFICACION AL EJERCICIO ORIGINAL, CAMBIAMOS TRUE POR "MULTA" Y FALSE POR "NO MULTA"*****
 * 
 *    La penalización será: ((90-80) + (130-120))*2/10 = 4
 * 
 */


"use strict";

const speeds = [100, 105, 90, 130];
const maxSpeeds = [120, 120, 80, 120];

//comparamos la velocidad con la velocidad maxima y sera true si es mas (multa) y false si es menos (no multa)

let speed = [];

let infraction = [];

for (let i=0; i<speeds.length; i++) {
    if (speeds[i] <= maxSpeeds[i]) {
        speed = "No Multa" 
                           }
    else speed = "Multa";

    infraction.push(speed);
}

console.log(`Multas por tramo: ${infraction}`);

//inicializamos en 0 la penalizacion y la incrementamos cada vez que hay un exceso (diferencia entre velocidad permitida y real)

let penalization = 0;


for (let i=0; i<speeds.length; i++) {
    if (speeds[i] >= maxSpeeds[i]) {
    penalization += (speeds[i] - maxSpeeds[i]);
            
    }
       
        }     

let points = (penalization * 2) / 10;

console.log(`La penalización será de ${points} puntos`);

