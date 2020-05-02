//Modo estricto, cost y let

"use strict"; //obliga a usar una sintaxis correcta o sino reportara error

const a = [1,2,3,4]; //se aplica a para definir una variable que no va a cambiar
let b = []; //se aplica a una variable que se puede cambiar en un futuro

// Sintaxis console.log

console.log(`Texto escrito ${valores_calculados(operaciones, bucles, funciones, etc)}`);

//Mayusculas y minisculas

variable.toUpperCase(); // pone en mayusculas el resultado de la variable
variable.toLowerCase(); // pone en minisculas el resultado de la variable

//Eliminar espacios vacios

variable.trim();

// Extraer o cortar una variable, array, objeto, etc

variable.slice(desde_donde, hasta_donde); //Si se pone un solo caracter, por ejemplo ; cortara desde un ; hasta el siguiente

// Buscar un elemento dentro de un string, array, objeto, etc

variable.indexOf(caracter_a_buscar, donde_empieza_a_buscar //si no se pone nada empieza desde el principio);

//Repetir variable

variable.repeat(cuantas_veces_se_repite);

//Ajustar numero de decimales

variable.toFixed(numero_de_decimales_que_queremos);

//Operaciones matemáticas

const suma = a + b;
const resta = a - b;
const division = a / b;
const multiplicacion = a * b;
const resto = a % b;

//Tipo de variable (string, numero o boleano)

console.log((typeof(variable)));

//convertir una string "20" a numero 20

variable = parseFloat(variable);

//Split ==> corta un array u objeto en varias partes

nombre = "Juan Rodriguez Cuervo";
nombre2= nombre.split(" "); 
console.log(nombre2); // devolvera [ 'Juan', 'Rodriguez', 'Cuervo' ], es decir, corta por donde le indiquemos, en este caso por un espacio en blanco

//Join ==> lo contrario de split, sirve para unir 

nombre = [ 'Juan', 'Rodriguez', 'Cuervo' ];
nombre2 = nombre.join() //si no se pone nada separa por comas, sino por lo que se ponga
console.log(nombre2); // devolvera "Juan,Rodriguez,Cuervo"

//Sintaxis if

if (condicion: si_pasa_esto) {
    resultado_condicion: entonces_hago_esto;
    else if (pero_si_esto) {
        entonces_esto_otro;
        }
        else (y sino) {
            entonces_esto;
        }
 }

//Sintaxis For

for //Recorremos el array: 
//Dos formas: 
// 1.- para cada elemento del array: 
    (elemento of array) { //empieza a leer en el primer elemento y hace el bucle hasta terminar en el ultimo
       resultado: //puede ser una condicion, haciendo un if, un log, una operacón matematica, llamar a una función, etc
    }
for
// 2.- con el indice ¡
    (i=0; i<array.length; i++) { //i indica la posicion del elemento en el array, el bucle seria: 
                                //recorremos el array desde la posicion 0 hasta que i es menor que la longitud del array (recordar que se empieza a contar desde 0)
                                //e incrementamos en uno la posicion de i en cada interaccion (i++)

        resultado: //puede ser una condicion, haciendo un if, un log, una operacón matematica, llamar a una función, etc
    }


//Sintaxis while

while(condicion) { //El bucle se estará ejecutando mientras la condición se cumpla
    resultado: //Lo que queremos que haga mienttas se cumpla la condición. Puede ser una condicion, haciendo un if, un log, una operacón matematica, llamar a una función, etc
}

//continue ==> se usa en un if o en un of para pasar a la siguiente iteración: if (condicion) {
                                                                                // resultado condicion
                                                                                // continue --> no haria nada y pasaria a la siguiente iteración 
                                                                                // }

//Hacer un contador

const grades = [7.9, 9.11111, 1, 6];

let suma = 0;
let contador = 0;
let grade = 0;

for (grade of grades) {
    
        contador++; // es lo mismo que contador = contador +1
        suma = suma + grade;
   }
console.log(contador); //el contador sera 4, la funcion lee 7.9 (grade 0 de grades) y hace contador igual a 0 (valor inicial) + 1, luego lee 9.1 y hace contador (que ya vale 1) igual a 1+1, etc

console.log(suma); //la suma sera 24, la funcion lee 7.9 (grade 0 de grades) y hace suma igual a 0 (valor inicial) + 7.9, luego lee 9.1 y hace contador (que ya vale 7.9) igual a 7.9 + 9.1, etc

//Nuevo Array

nuevoArray = nuevoArray.push(variable_a_introducir);

//Fusionar Arrays

[[1,2], 3,4].flat()     -> [1,2,3,4]
newArray = (firstArray, secondArray).flat();

//Invertir un Array

arrayEntrada: [1,2,3,4];
arraySalida:  [4,3,2,1];

arraySalida = arrayEntrada.reverse();

//Copiar un Array

array1 = [1,2,3,4,5,6];

array2 = [...array1]; //esto NO es equivalente a hacer array2 = array1 poeque en este caso si modificamos array1 tambien se modifica array2, es decir, array2 esta apuntando a array1

//Funciones: se usan de manera generica para ahorrar codigo y no tener que estar repitiendo la misma acción. Se crea un archivo para ellas y se las llama cuando se las necesita

   //Sintaxis
                function nombreFuncion(Parametro1, parametro2) { //el nombre de la funcion lo elegimos nosotros, debe describir lo que hace. Parametro1 y parametro2 tambien lo
                                                                    //elegimos nosotros. Seran sustituidos por los datos a tratar al aplicar la funcion
                        "partametro1 <>+-*/= parametro2" //aqui escribimos lo que queremos que haga la funcion, puede haber un if, un for, otra funcion...
                        return //el resultado que queremos obtener
                    }

    //Ejemplo
                function multaOnoMulta(speed, maxSpeed) {
                    if (speed <= maxSpeed) {
                        return speed = "No Multa" 
                        }    else {
                        return speed = "Multa";
                    }
                } //nos devolvera "Multa" o "No Multa" en funcion de los datos que se introduzcan como speed y maxSpeed al aplicar la funcion
                //por ejemplo
                velocidad = 100
                velocidadMaxima = 120
                Multa = multaOnoMulta(velocidad, velocidadMaxima);
                console.log(`Resultado del radar: ${Multa}`); //como 100 es <= que 120 el return sera "No Multa", que sera el valor de la variable Multa.
    
    //Normalmente en un trabajo se utilizan muchas funciones. Para un mejor orden y que el codigo sea lo mas limpio y legible posible se crea un archivo a parte para las funciones.
    //Se crearan tantos archivos como tipos de funciones haya, por ejemplo, un "math" para las matematicas, un "utils" para las filtren cosas, etc.
    //En ese archivo deben existir las llamadas a enlaces externos, si las funciones los usan, etc y al final debe terminar de esta manera:

    module.exports = {
        nombreFuncion1
        nombreFuncion2
        nombreFuncion3
        etc // asi hasta todas las funciones que haya
    }

    //En el archivo de trabajo debe indicarse antes de llamar a la primera funcion

    const funciones = require("ruta al archivo de las funciones, con las comillas"); //el nombre funciones es aleatorio, podemos poner el que queramos

    //Para llamar a una funcion usaremos, en el archivo de trabajo

    const variable = funciones.nombreFuncion(parametro1, parametro2); // donde funciones sera el nombre elegido previamente para llamarlas en el require

    //Arrays de Objetos. La estructura va entre corchetes como un array cualquiera y los campos entre llaves separados por comas.

    let products = [ //Estructura
        {
            id: 1,              //
            name: 'TV LG',      //  
            quantity: 2,        //
            price: 400          // Campos
        },
        {
            id: 2,
            name: 'Phone Apple',
            quantity: 1,
            price: 800
        },
        {
            id: 3,
            name: 'Phone Sony',
            quantity: 0,
            price: 400
         },
     ]

                //Acceder a un campo: estructura.campo, es decir, products.id, products.name, etc

                