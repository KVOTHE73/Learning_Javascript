/**
 * Entregable semana 2
 * 
 * Escribe el código necesario para decidir en qué
 * fotografías sale Pablo. Como resultado se debe
 * obtener un array de strings con los nombres de las
 * fotografías.
 *  
 */

const photos = [
    {
        name: 'Cumpleaños de 13',
        people: ['Maria', 'Pablo']  
    },
    {
        name: 'Fiesta en la playa',
        people: ['Pablo', 'Marcos']  
    },    
    {
        name: 'Graduación',
        people: ['Maria', 'Lorenzo']  
    },
 ]

 const photoPablo = pablo =>  pablo.people.indexOf("Pablo") != -1 ;
 const nombreEnPhoto = pablo => pablo.name;
 let pabloIsIn = photos
    .filter(photoPablo)
    .map(nombreEnPhoto);
    

console.log(`Pablo sale en: ${pabloIsIn}`);
