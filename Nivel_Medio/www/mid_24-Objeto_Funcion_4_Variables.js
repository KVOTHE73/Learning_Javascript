/**
 * Estamos programando una página de una inmobiliaria. 
 * 
 * Los inmuebles disponibles se representan como un array de objetos
 * con la siguiente estructura:
 * 
 * {
 *    id: 1
 *    name: 'Piso en el centro',
 *    rooms: 2,
 *    metres: 100,
 *    price: 400
 * }
 *  
 * Escribe una función para filtrar los inmuebles que cumplan una serie
 * de condiciones. Dicha función recibirá el array de inmuebles,  el 
 * número mínimo de habitaciones, el número mínimo de metros y el
 * precio máximo.
 * 
 * Si no desea filtrar por alguna de las condiciones, el valor del parámetro
 * será -1
 * 
 */

"use strict";

  let houses = [
    {
        id: 1,
        name: 'Piso en el centro',
        rooms: 2,
        metres: 80,
        price: 100000
    },
    {
        id: 2,
        name: 'Piso calle X',
        rooms: 3,
        metres: 90,
        price: 150000
    },   
    {
        id: 3,
        name: 'Casa en la playa',
        rooms: 4,
        metres: 120,
        price: 200000
    },

 ]


function filterOfHouseCriteria(housesForSale, minNumberOfRooms, minNumberOfMetres, maxPrice) {

    let filterCriteria = [];

    for (let house of housesForSale) {
        if ((house.rooms >= minNumberOfRooms) && 
            (house.metres >= minNumberOfMetres) && //no hace falta poner === -1 porque cualquier numero de habitaciones o de metros sera mayor que -1
            (house.price <= maxPrice) || (maxPrice === -1)) { //para el precio si es necesario indicar el === -1 porque si maxPrice es -1 house price 
                                                                //siempre sera mayor y devolvera un array vacio ya que nunca se cumplira.

            filterCriteria.push(house);
        }
    }

    return filterCriteria;
}

//console.log(filterOfHouseCriteria(houses, 2, 75, 110000));
//console.log(filterOfHouseCriteria(houses, -1, -1, 150000));
console.log(filterOfHouseCriteria(houses, 4, -1, -1));