'use strict';

//constructor functions
//we can use constructor functions to build an object using a function
// a constructor function is actually a completely normal function 
// the only difference between a regular function and a constructor function is that we call a constructor function
// with new operator.

//create a constructor function for a person , constructor functions always start with a capital letter (convention)
// in fact  other built-in constructors like Array or map follow that convention

// an arrow function will actually not work as a  function constructor  , that's because it doesn't have it's own this keyword and we need that
//only function declarations , and function expression that works

//this function will produce an object
const Person = function(firstName, birthYear){
    //because we called the function  with new keyword , this refer to the empty object created
    //the this keyword should be the empty object created in step 1 
    // console.log(this);
    // create a property on this keyword 
    // the instance properties , these properties will available on all instances created
    // through this constructor function.
    this.firstName = firstName;
    this.birthYear = birthYear;


    // we can also add methods to that object
    // you should never create a method inside the constructor function .
    // it's a really bad practice  
    

    //why?
    /*
        that's because imagine that we're gonna create a hundred or thousands of Person
        object using this constructor function . so each of these objects would carry arround this function.
        if we had thousand objects , we would essentially ctreate a thousand copy of this function
        and that will be terrible for the code performance , so don't do this.
        so to solve this probleme we will use protoypes and prototype inheritance.
    */
    this.calcAge = function(){
        console.log(2037 - this.birthYear);
    };
}

// call the constructor new keyword
// the new operator is a special operator  because what it does , is to call the Person function

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//when calling a function constructor with new keyword . what happens behind the scenes?
/*
    1- a new empty object is created {}
    2- function is called , and this keyword will be set to the newly created object this = {}(this = the new empty object)
        in the execution context of the function , the this keyword  will point to the the empty object created
    3- the newly created object {} is linked to a prototype
    4- object that was created in the begening  is then automatically returned from the constructor function 
*/

// we can use the constructor function to create many object as we want
//we can create many object based on this constructor function
const matilda = new Person('Matilda',2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// in classical object oriented programming :
// an object created from a class is called an instance,
// now , we didn't techniclly create a class here  because js doesn't really have classes in the sense of traditionnel oop
// however we did create an object from the constructor function , 3 objects.
// constructor function have been used since the begening of js to kind of simulate classes
// therefore we cam say that jonas is an instance of Person.
// there is even an opertaor to test that :
console.log(jonas instanceof Person);

const jay = 'jay';

console.log(jay instanceof Person);

/**
 * constructor functions are not really a feature of javascript language.
 * instead there are simply a pattern that has been developped by other developpers. 
 * the new magic here is the new operator 
 */