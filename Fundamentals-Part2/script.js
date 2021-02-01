'use strict'

//array
const jonas =[
    'jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael' ,'Peter','Steven'],
    true
];

for(let i = jonas.length -1 ; i >= 0 ; i--)
    console.log(i,jonas[i]);

//how we can create a loop inside a loop

//3 exercices , every exercice has 5 repitions .

for(let exercise = 1 ; exercise < 4 ; exercise++){
    console.log(`----------- Starting exercice ${exercise}`);
    for (let rep = 1 ; rep < 6 ; rep++)
        console.log(`Exercice ${exercise}: Lifting weight repetion ${rep}`);
}