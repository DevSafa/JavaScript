


const now = 2021;
//---------------
//Math operators
//----------------

//use the minus operator to calculate an age
const ageJonas = now - 1990;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageJonas / 10 , 2**3 );
//2**3 means 2 to the power of 3 = 2 * 2 * 2 


const firstName = "Safa";
const lastName = "Barka";
//use the + operator for concatenation
console.log(firstName + lastName);
console.log(firstName + " " +lastName);

//---------------------
//assignement operator
//---------------------

//the + operator is executed before the assignement operator
let x = 10 + 5;
console.log(x);
x+=10; // x = x + 10 = 15 + 10 = 25
x *= 4 ; // x = x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x= x -1 = 100
x--; // 99
console.log(x);

//----------------------
//comparison operators
//----------------------

//we use comparison operators to produce boolean values : >, <, >= , <=
console.log(ageJonas > ageSarah); // true 31 > 3 
console.log(ageSarah >= 18); // false

//is FullAge will be the variable holding the boolean value
const isFullAge = ageSarah >= 18 
console.log(isFullAge);

// js will do arithmetic first (now - 1991)  , (now -2018) , and then do comparison (>)
console.log(now - 1991 > now - 2018);