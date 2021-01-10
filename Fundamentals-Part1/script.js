//////////////
//type conversion 
/////////////

// converting strings to numbers

const inputYear = '1991';
console.log(inputYear);
// to do some calculation with  inputYear , it will not work because it a string .

//when we have a string and we add something to the string ,
//it will basically concatenate the strings .
//we can't expect that it actually add 18 to the number 1991 .
console.log(inputYear + 18); //199118

// so we need a way to convert the string to a number .
// we do that by using built-in Number() function 
console.log(Number(inputYear) , inputYear);

// inputYear still host the value 1991 as a string not as a number 
//using the Number() function will simply give to us a converted version 
console.log(Number(inputYear) + 18);

// what if we try to convert something to a number that is impossible to convert
console.log(Number('safa')); // NaN -> stands for not A  number 

console.log(typeof NaN); // NaN actually mean invalid number , it still a number somehow but it's an invalid one .

// converting numbers to strings

console.log(String(123), 123);

//////////////////
//type coercion 
/////////////////
console.log("I'am " + 23 + " years old"); // I'am 23 years old 

//how that does actually work?
//it works this way because of type coercion 
//thanks to type coercion writing this :
console.log("I'am " + 23 + " years old");

//will be the same as writing this :
console.log("I'am " + "23" + " years old");

//without type coercion in javascript , we have to do : 
console.log("I'am " + String(23) + " years old");

// this time javascript converts the strings to numbers 
//the minus operator actually triggers the opposite conversion 
console.log('23' - '10' - 3); // 10 

//in this case will convert numbers to strings 
console.log('23' + '10' + 3);  //23103

// it will convert strings to numbers , because that the only way the multiply operator can works
console.log('23' * '2'); //46

//convert string values to numbers
console.log('23' / '2');

//logical operators
// here js will convert strings to numbers automatically
//the only way where it doesn't do that is the plus operator
console.log('23' > '18');


// Guess the output

// the plus operator will automaticaaly convert number to a string 
let n  = '1' + 1; // n = '11'

// the minus operator will convert the string to a number 
n = n - 1; // n = '11' - 1 = 11 - 1 = 10

console.log(n); // n = 10 

console.log(2+3+4+'5'); // '95'
console.log( 3 - 1 -2 - '6') // -6
console.log('10'- '4' - '3' -2 + '5'); // '15'
