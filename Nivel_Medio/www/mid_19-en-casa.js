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
population = [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
