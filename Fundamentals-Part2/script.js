
'use strict';
// function declaration ; because we use function keyword to declare a function.
////////////////////////

function calcAge(birthYear){
    const age = 2037 - birthYear;
    return age;
}
const age3 = calcAge1(2004);
console.log(age3);
//the parameter is kind of the placeholder in the function 
function calcAge1(birthYear){
   return 2037 - birthYear;
}

// the argument is the actual value that we use to fill in that placeholder taht is the parameter.
//invoke the function 
const age1 = calcAge1(1991);
console.log(age1); 

//function expression ; write a function basically without  a name , but we still define parameters , and function body .
/////////////////////

//script.js:25 Uncaught ReferenceError: Cannot access 'calcAge2' before initialization at script.js:25
//const age4 = calcAge2('2004');

// a function without name also called anonymous function , the function is an expression (produces a value)
//we use that value and we store it in calcAge2 , and that variable is the function .
const calcAge2 = function(birthYear){
    return 2037 - birthYear
}

const age2 = calcAge2(1991);
console.log(age2);

