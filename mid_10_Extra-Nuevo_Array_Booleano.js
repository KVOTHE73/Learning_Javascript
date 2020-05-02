"use strict";

//comparar si la nota es aprobado (true) o suspenso (false)

let averageGrades = [1, 6, 9, 5.4]

// output = [false, true, true, true]

let output = [];

let i =[];

for (i=0; i<averageGrades.length; i++) {
    if (averageGrades[i] >= 5) {
        output.push(true);
            }
    else output.push(false);
}

console.log(output);

let output2 = [];

for (i=0; i<averageGrades.length; i++) {
    output2.push(averageGrades[i] >= 5);
}

console.log(output2);

