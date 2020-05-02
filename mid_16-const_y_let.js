/**
 * Ámbito de las variables
 * 
 * Hasta ahora declarábamos las variables en cualquier parte del código
 * y las usábamos dónde nos hacía falta. Esta forma de trabajar funciona
 * mientras nuestras aplicaciones son muy sencillas, pero es muy propensa
 * a errores cuando crecen.
 * 
 * La manera correcta de hacerlo es declarar las variables en el ámbito
 * más restringido, es decir, dentro de los corchetes donde se van a usar. 
 * Y además se indica si la variable se va a poder modificar o no. Veamos 
 * un ejemplo:
 * 
 * Descomentad cada uno de los bloques indicados a continuación para
 * entender cada una de las distintas casuísticas que se pueden dar 
 * 
 */


 
 // DESCOMENTA ESTE BLOQUE PARA EJECUTARLO
 // nota el error que da debido a que `passed`
 // no existe fuera del ámbito del `if`
 const grade = 8;
 const passTreshold = 5;

 if (grade > passTreshold) {
    const passed = true;
 }

 // console.log(passed); ==> nos dice que passed no esta definido porque solo existe dentro del if, habria que declararlo fuera: let passed = [];




 // DESCOMENTA ESTE BLOQUE PARA EJECUTARLO
 // nota el error debido a la declaración de dos
 // variables con el mismo nombre
// let miVariable = 0;
// let miVariable = 2; ==> dice Identifier 'miVariable' has already been declared porque no puede haber dos variables con el mismo nombre en el mismo scope (=nivel)



 // DESCOMENTA ESTE BLOQUE PARA EJECUTARLO
 // nota cómo la asinación dentro del if se refiere
 // a la variable declarada fuera
let mensajes = '';
let notas = 8;

if (notas>5) {
   mensajes = 'aprobado';
   
   
}

// console.log(mensaje); ==> Identifier 'mensaje' has already been declared, igual que en el anterior, mensajes esta declarado dos veces.





 // DESCOMENTA ESTE BLOQUE PARA EJECUTARLO
 // el console.log no pinta nada, ya que la variable
 // `mensaje` ha sido redeclarada dentro el `if`
 // y fuera del mismo tiene el valor inicial, esto es,
 // cadena vacía
let mensaje = '';
let Nota = 8;

if (Nota>5) {
   let mensaje = 'aprobado';
}

//console.log(mensaje); ==> si ponemos el raton sobre el "mensaje" de dentro del if, que sale en color gris, nos dice que esta declarado pero que nunca sera leido, ya que prevalece el ,que esta declarado afuera, que es una cadena vacia

let nota = 4;

if (nota>5) {
   let calificacion = 'aprobado';
   console.log(calificacion);
   
}
if (nota<5) {
   let calificacion = 'suspenso';
   console.log(calificacion);
   
} 

// Aqui tenemos dos variables con el mismo nombre pero al existir solo dentro de sus respectivos if si funciona sin problema.
// console.log(calificacion);==> pero tendremos que hacer los log dentro de cada if, si lo ponemos afuera nos dira calificacion is not defined porque calificacion no existe fuera del if