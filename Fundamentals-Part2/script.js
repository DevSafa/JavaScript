'use strict'

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// litteral syntax
const friends = ['Michael','Steven','Peter'];
console.log(friends);

//Array() is a function , new is a keyword
const y = new Array(1991 , 1984 , 2008, 2020);
console.log(y);

//arrays are zero based
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

//length is a property
//number of elements of the array 
console.log(friends.length);

// the last element in the array 
// inside square bracket js , expect an expression(produce value)
console.log(friends[friends.length -1]);

//add elements to the array

friends[2] = 'Safa';

console.log(friends);

// we can't do 
//friends = ['Bob' , 'Alice'];

// an array can hold values with different types all at the same time

const firstName= 'safa';
const me = [firstName, 'Barka' , 2021 - 1997 ,'1337student',friends];
console.log(me);
console.log(me.length);

console.log('---------------');
//Exercice

const calcAge = function(birthYear){
    return 2021 - birthYear;
}

const years = [1990, 1967, 2002, 2010 , 2018];

//NaN
console.log(calcAge(years));
//we cannot do operations witha arrays . years + 10(will convert the arrauy to string and add 10 to it) 
//, years - 10(NaN);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]) , calcAge(years[1]) , calcAge(years[years.length - 1])];
console.log(ages);