/**
 * Arrays y funciones
 * 
 * Vamos a analizar cómo avanza una enfermedad infecciosa.
 * 
 * Para ello representamos en un array la población de 
 * una determinada zona. Hay un 1 si en esa posición del array
 * la persona está infectada, y un cero si no lo está. Ej.:
 * 
 *    [0,0,0,0,1,0,1,1,0]
 * 
 * Teniendo en cuenta que cada persona contagiada infecta
 * a los dos que están a su lado cada día, ¿cuántos días
 * tarda en infectarse toda la población?
 * 
 * Ejemplo de evolución:
 *    Day 0: [0,0,0,0,1,0,1,1,0]
 *    Day 1: [0,0,0,1,1,1,1,1,1]
 *    Day 2: [0,0,1,1,1,1,1,1,1]
 *    Day 3: [0,1,1,1,1,1,1,1,1] 
 *    Day 4: [1,1,1,1,1,1,1,1,1] 
 * 
 * Nota: ¿cómo copiar un array?
 * No lo hemos dado aún, pero para este ejercicio os puede ser útil saber
 * que para copiar un array no vale con hacer:
 *    variableArray2 = variableArray1
 * 
 * como haríamos con los números. En su lugar haremos lo siguiente:
 *    variableArray2 = [...variableArray1]
 * 
 */

"use strict";

let initialInfection = [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];

//Evolucion de la infección

let Day0 = [...initialInfection];

console.log(`Infectados iniciales: ${Day0}`);

function infectEvolution(currentInfection) {

let nextDay = [...currentInfection]; //creamos la variable nextDay, que parte de la situación del dia anterior

for (let i=0; i<currentInfection.length; i++) {
    if (currentInfection[i] === 1) { //Recorremos el array buscando donde hay infectados = 1
        if (i>0) {
            nextDay[i - 1] = 1; // si i mayor que 0 se contagia al anterior
        }

        if (i !== currentInfection.length-1) {
            nextDay[i + 1] = 1; // contagiar al siguiente
        }
    }
}

return nextDay;
}

Day0 = infectEvolution(Day0);

console.log(`Infectados 24h despues del inicio de la infección: ${Day0}`);

let Day1 = [...Day0];

Day1 = infectEvolution(Day1);

console.log(`Infectados 48h despues del inicio de la infección: ${Day1}`);

let Day2 = [...Day1];

Day2 = infectEvolution(Day2);

console.log(`Infectados 72h despues del inicio de la infección: ${Day2}`);

let Day3 = [...Day2];

Day3 = infectEvolution(Day3);

console.log(`Infectados 96h despues del inicio de la infección: ${Day3}`);

let Day4 = [...Day3];

Day4 = infectEvolution(Day4);

console.log(`Infectados 120h despues del inicio de la infección: ${Day4}`);

// Poner el código principal en una función que devuelva el número de días
// y -1 si no hay infectados


let numDays = 0;

for (let i=0; i<initialInfection.length; i++) { //recorremos el array de la situación inicial
    if (initialInfection.indexOf(1) === -1) {
        console.log("La población nunca se infectará"); //si no existen 1 es que no hay ningun infectado ==> la población nunca se infectará, 
        }
        else { //pero si hay algun infectado = 1,
            while (initialInfection.indexOf(0) !== -1) {
                initialInfection = infectEvolution(initialInfection); //aplicamos la función sobre como va a evolucionar la infección,
                numDays++; //y mientras existan 0 acumulamos dias
            } 
        }
}

console.log(`Toda la población se infecta en ${numDays} días, es decir, en ${numDays*24}h`);
        