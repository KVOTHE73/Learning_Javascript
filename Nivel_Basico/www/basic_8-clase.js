/**
 * En el ejercicio anterior aprendimos que Javascript, a veces,
 * interpreta el contenido de una cadena como un número, pero otras no,
 * lo que puede llevar a errores en el código.
 * 
 * Para evitar este problema haremos uso de dos funciones que nos 
 * proporciona el lenguaje: `parseInt` y `parseFloat`. La primera
 * interpreta una cadena como un número entero, mientras que la
 * segunda lo hace como un número decimal.
 * 
 * Probemos lo siguiente:
 *      1) Repitamos el ejercicio anterior, pero esta vez usando la función
 * `parseInt`, como se muestra en el ejemplo de la suma. ¿Son los
 * resultados ahora los esperados?
 * 
 *      2) ¿Y si en lugar de valer 20 y 10, los valores de a y b fuesen 20.1 y 10.5,
 * respectivamente? (LOs decimales de escriben con punto y no con coma)
 * 
 *      3) Repite lo anterior con `parseFloat`
 * 
 */
 
 
// A - PARSEINT

a = '20';
b = '10';

a = parseInt(a);
b = parseInt(b);

suma = a + b;
resta = a - b;
division = a / b;
multiplicacion = a * b;
resto = a % b;
 
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Division: ${division}`);
console.log(`Multiplicacion: ${multiplicacion}`);
console.log(`Resto: ${resto}`);

a = '20.1';
b = '10.5';

a = parseInt(a);
b = parseInt(b);

suma = a + b;
resta = a - b;
division = a / b;
multiplicacion = a * b;
resto  = a % b;
 
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Division: ${division}`);
console.log(`Multiplicacion: ${multiplicacion}`);
console.log(`Resto: ${resto}`);

// con parseint no tiene en cuenta los decimales, por eso da los mismo en los dos casos

// B - PARSEFLOAT

a = '20';
b = '10';

a = parseFloat(a);
b = parseFloat(b);

suma = a + b;
resta = a - b;
division = a / b;
multiplicacion = a * b;
resto = a % b;
 
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Division: ${division}`);
console.log(`Multiplicacion: ${multiplicacion}`);
console.log(`Resto: ${resto}`);

a = '20.1';
b = '10.5';

a = parseFloat(a);
b = parseFloat(b);

suma = a + b;
resta = a - b;
division = a / b;
multiplicacion = a * b;
resto  = a % b;
 
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Division: ${division}`);
console.log(`Multiplicacion: ${multiplicacion}`);
console.log(`Resto: ${resto}`);

// con parsefloat si tiene en cuenta los decimales, por eso el resultado cambia