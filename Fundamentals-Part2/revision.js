'use strict'

//d2claration function
logger();
console.log('-----------');
function logger(){
    console.log('My name is safa');
}

logger();
logger();
logger();

logger(250);

function fruitProcessor(apples, oranges)
{
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(10, 15));
const result = fruitProcessor(20,30);
console.log(fruitProcessor(1, 0));
console.log(fruitProcessor(0, 12));
console.log(result);

const num = Number('2345');
console.log(num);

console.log('------------------');

console.log(calcAge(1997));

function calcAge(birthYear)
{
    const age = 2021 - birthYear;
    return age;
}

const age = calcAge(2004);
console.log(age);
console.log

console.log('---------------------');

//anonymous function
//expression function

//we can't
//console.log(calcAgeExp(1989));
const calcAgeExp = function(birthYear)
{
    return 2037 - birthYear;
}

console.log(calcAgeExp(2000));

const myage = calcAgeExp(2009);
console.log(myage);

console.log('-------------------');
//we can't , it's a special form of expression function
//console.log(calcAgeArrow(2020));

//one parameter
const calcAgeArrow = birthYear => 2021 - birthYear ;

console.log(calcAgeArrow(1999));

const calcAgeArrowv =  calcAgeArrow(1999);

console.log(calcAgeArrowv);

console.log('-------------------');
//more than one parameter

const myjuice = (apples, oranges) => `${apples} apples  and ${oranges} oranges`;

console.log(myjuice(5,6));
console.log(myjuice(10,20));

console.log('---------------');

const infos = (birthYear , firstName , lastName) => {
    
    const myage = 2021 - birthYear ;
    const fullName = `${firstName} ${lastName}`;
    return `age = ${myage}\nfullName = ${fullName}`;
}
console.log(infos(1997 , 'safa' ,'barka'));


console.log('---------------------');

function fruitPieces(fruit)
{
    return fruit * 4;
}

 const juice = (apples, oranges) =>{
     const applesPieces = fruitPieces(apples);
     const orangesPieces = fruitPieces(oranges);

     return `juice with ${applesPieces} pieces of apples and ${orangesPieces} pieces of oranges`;
 }

console.log(juice(5,6));

console.log('-------------------');


