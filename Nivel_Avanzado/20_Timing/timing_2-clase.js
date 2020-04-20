/**
 * Fechas
 * 
 * Escribe una función que devuelva un array con los nombres
 * de aquellos estudiantes que hayan realizado un ejercicio 
 * en menos del tiempo indicado como parámetro `maxTimeInSeconds`
 * 
 * La estructura del primer parámetro es la siguiente:
 * 
 * [
 *   {
 *       name: 'andres',
 *       ini: new Date(2019, 9, 4, 12,0,0),
 *       fin: new Date(2019, 9, 4, 12,6,0),
 *   },
 *   {
 *       name: 'maria',
 *       ini: new Date(2019, 9, 4, 12,0,0),
 *       fin: new Date(2019, 9, 4, 12,4,0),
 *   },
 * ]
 * 
 */


const times = [
    {
        name: 'andres',
        ini: new Date(2019, 9, 4, 12,0,0),
        fin: new Date(2019, 9, 4, 12,6,0),
    },
    {
        name: 'maria',
        ini: new Date(2019, 9, 4, 12,0,0),
        fin: new Date(2019, 9, 4, 12,4,0),
    },
]

getPassedStudents(times, 300); // ['maria']
