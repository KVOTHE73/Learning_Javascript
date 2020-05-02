
/**
 * Operaciones básicas con cadenas
 * 
 * Durante el desarrollo de una aplicación suele ser necesario
 * acceder a cada uno de los caracteres de una cadena, para ello
 * basta con escribir el nombre de la variable seguida de la posición
 * que nos interesa, entre corchetes:
 * 
 *    miCadena = 'Hola'
 *    segundaLetra = miCadena[1]
 * 
 * Notad cómo la numeración empieza en el cero, es decir, la primera letra
 * está en la posición cero, la segunda en la posición uno, etc.
 * 
 * Otra acción habitual es averiguar la longitud de una cadena:
 * 
 *    miCadena = 'Hola'
 *    longitud = miCadena.length
 * 
 * Con lo aprendido hasta ahora, escribir el código necesario para 
 * escribir en pantalla:
 * 
 *    - el nombre completo en formato: 'Induráin Larraya, Miguel (MIL)'
 *    - la última letra de cada palabra: 'LNA'
 *    - investigar qué pasa si accedéis a una posición mayor que la longitud,
 *      por ejemplo, la posición 1000
 *
 */

name = 'Miguel';
surname1 = 'Induráin';
surname2 = 'Larraya';

nombreCompleto = `${surname1} ${surname2}, ${name} (${name[0]}${surname1[0]}${surname2[0]})`

console.log(nombreCompleto)

ultimaLetra = `(${name[name.length-1].toUpperCase()}${surname1[surname1.length-1].toUpperCase()}${surname2[surname2.length-1].toUpperCase()})`

console.log(ultimaLetra)

longitudMayor = nombreCompleto[1000]

console.log(longitudMayor)

