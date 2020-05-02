/**
 * El objetivo de este ejercicio es hacer una calculadora, 
 * súper simplificada, del IRPF. El IRPF es un impuesto que 
 * pagamos al Estado proporcional a nuestros ingresos. Además, 
 * se aplica por tramos, como se indica a continuación:
 *  
 * Tramos IRPF 2019
 *   Desde 0 hasta 12450€: 19%              
 *   De 12450€ a 20200€: 24%
 *   De 20200€ a 35200€: 30%
 *   De 35200€ a 60000€: 37%
 *   Más de 60000€: 45%
 * 
 * Así, una persona que haya ganado 10000 euros, pagaría el 19% de esos 10000. 
 * Si hubiese ganado 15000 euros, pagaría el 19% de los 12450 primeros euros, 
 * y el 24% de la diferencia entre 15000 y 12450.
 * 
 * Disclaimer: este es un cálculo súper simplicado, la fórmula real incluye 
 * muchísimas variables
 * 
 */


"use strict"

let salario = 15000

const tramo1 = 12450
const tramo2 = 20200
const tramo3 = 35200
const tramo4 = 60000
const tramo5 = 60000
const irpfTramo1 = 12450*0.19
const irpfTramo2 = ((tramo2-tramo1)*0.24) + tramo1*0.19
const irpfTramo3 = ((tramo3-tramo2)*0.30) + irpfTramo2
const irpfTramo4 = ((tramo4-tramo3)*0.37) + irpfTramo3
const irpfTramo5 = ((salario-tramo4)*0.45) + irpfTramo4

console.log(irpfTramo2);

if (salario <= tramo1) {
        console.log(`IRPF = ${salario*0.19}`);
}
else if (salario > tramo1 && salario <= tramo2) {
    console.log(`IRPF = ${(salario-irpfTramo1)*0.24}`);
}
else if (salario > tramo2 && salario <= tramo3) {
    console.log(`IRPF = ${irpfTramo3}`);
}
else if (salario > tramo3 && salario <= tramo4) {
    console.log(`IRPF = ${irpfTramo4}`);
}
else {
    console.log(`IRPF = ${irpfTramo5}`);
}