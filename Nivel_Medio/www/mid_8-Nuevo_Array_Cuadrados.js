/**
 * Dado un array de números, crear uno nuevo
 * cuyos elementos sean los cuadrados del array
 * original
 */

"use strict";

const values = [1, 3, 4, 5, 2, 8];
// [1, 9, 16, 25, 4, 64]

let output = [];

let value = [];

let newValue = [];

for (value of values) {
    newValue = value*value;
    output.push(newValue);
}

console.log(output);
