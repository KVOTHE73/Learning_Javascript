/**
 * Funciones
 * 
 * Cuando queremos aplicar el mismo código varias veces, podemos crear `funciones`.
 * En el caso de obtener la nota textual, vamos a querer calcularla no una, sino muchas
 * veces. Para ello, encapsularemos el código desarrollado en una función. 
 * 
 * El ejemplo a continuación muestra la estructura típica de una función:
 *     - parámetros de entrada, que pueden ser 0 o varios. En este caso tenemos
 *       solamente uno: `grade`
 *     - cuerpo de la función. Es el código que realiza las operaciones necesarias
 *       usando, si lo necesita, los parámetros de entrada.
 *     - salida: el valor obtenido debe devolverse, para que pueda ser usado donde
 *       corresponda. Para ello se usará la cláusula `return`
 * 
 * Para profundizar:
 *     - Investiga que pasaría si hubiera declarada una variable llamada `grade` fuera de la función
 * 
 */

"use dtrict";

const grade1 = 9.1;
const grade2 = 5;
const grade3 = 6;

function averageGrade(grade) {
    if (grade < 5) {
        return "SUSPENSO";
    }
    if (grade >= 5 && grade <6) {
        return "SUFICIENTE";
    }
    if (grade >= 6 && grade <7) {
        return "BIEN";
    }
    if (grade >= 7 && grade <9) {
        return "NOTABLE";
    }
    if (grade >= 9) {
        return "SOBRESALIENTE";
    }
}


console.log(`La nota es: ${averageGrade(grade1)}`);
console.log(`La nota es: ${averageGrade(grade2)}`);
console.log(`La nota es: ${averageGrade(grade3)}`);

