/**
 * Tenemos una tienda online. 
 * 
 * Los productos disponibles se representan con un array de objectos
 * con la siguiente estructura:
 * 
 * {
 *    id: 
 *    name: 'TV LG',
 *    quantity: 2
 *    price: 400
 * }
 *  
 * Escribe una función que reciba dicho array y calcule el precio a pagar
 * por un cliente. Ten en cuenta la cantidad `quantity` de cada producto
 * y su precio `price`
 */

"use strict";

let products = [
    {
        id: 1,
        name: 'TV LG',
        quantity: 2,
        price: 400
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


 function compra(quantity, price) {
 
    let suma = 0;

    for (let product of products) {
        suma += product.quantity * product.price;
    }

    return suma;

}

console.log(`El precio a pagar por el cliente es de ${compra(products.quantity, products.price)} euros`);