

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;


//usually all the maths operators are executed before the comparison operators.
//the substraction operator is executed from left to right .
//the Greater than operator is executed from left to right .

console.log(now - 1991 > now - 2018);

//substraction is left to right  execution 
console.log(25 - 10 - 5);

//assignement is a good example for right to left execution.

let x,y; // x and y are equal to undefined.

//after the minus operation left to right , we end up with :
//x = y = 10.
//the assignement operators are executed right to left so :
// y = 10 annd the x = 10 ;

// if we start the assignement from left to right , the expected result will be x = undefined , y = 10 ;// and that not the case
x = y = 25 - 10 - 5; 
console.log(x, y);

// according to precedence table , the devision is happening before substruction.
//ageSarah will be devided by 2 and then ageJonas is gonna be added
const averageAgefalse  = ageJonas + ageSarah / 2;
//the result is not logic , the average is bigger than the ages
console.log(ageJonas, ageSarah,averageAgefalse); 

const averageAgeTrue = (ageJonas +ageSarah) / 2;
console.log(ageJonas,ageSarah,averageAgeTrue);

