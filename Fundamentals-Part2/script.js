'use strict'

// we have been using arrays as data structure to basically store 
//multiple related values in the same variable.
// basically it's a data structure which combines multiple values which belong 
//to Jonas .
//we can't reference these elements inside the array by name , but only with their order number in
//which they appear in the array 

//defining array
const jonasArray = [
    'Jonas', //firstname
    'Schmedtmann', //lastname
    2037 - 1991, //age
    'Teacher', //job
    ['Michael', 'Peter', 'Steven'] //friends
];

//defining an object ==> define a new object
//assign a name to each value, it was impossible in ararys.

//the object jonas has 5 preperties ,
//property firstName with value of jonas
//property lastname whith value Schmedtmann ,...
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job : 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};