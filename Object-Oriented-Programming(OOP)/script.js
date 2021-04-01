'use strict';

//Prototypes
const Person = function(firstName, birthYear){
  
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // };
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);
const matilda = new Person('Matilda',2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

const jay = 'jay';

console.log(jay instanceof Person);

//Prototypes
/**
 * each and every function in javascript automatically has  a property called prototype
 * and that includes of course constructor functions, every object created by a certain  constructor function
 * will get access to all the methods and properties that we define on the constructors prototype property:
 *   Person.prototype (prototype is a property of the constructor function)
 * 
 * all the objects created throught the Person constructor function  will inherit , so they will get  access to all the methods and properties 
 * that are defined on this prototype property
 */
console.log(Person.prototype);

//let add a method to the prototype property
// so it will exist only one copy of this functions.
// all the objects craeted using Person constructor function can basically reuse this function on themselfs
//this keyword is always set to the object calling the method.
//calcAge is located in the prototype property of Person.
Person.prototype.calcAge = function (){
    console.log(2037 - this.birthYear);
};

//each object created to the constructor function will get access to the  methods of this prototype property , and so of course also to calcAge

//we can use the method calcAge on the jonas Object even if it's not in the object itself.
//the jonas object had the birthYear and firstName , but it does not contain the calcAge method,
//but still we can access to it because of prototype inheritance


jonas.calcAge();
matilda.calcAge();

//why does it actually worls?
/*it works because NY OBJECT ALWAYS  has access to the methods and properties for it's prototype.
the prototype of jonas and matilda is Person.prototype
*/
//the prototype of jonas
//the prototype of jonas object is essentially the prototype property of the constructor function
console.log(jonas.__proto__);
console.log(Person.prototype);
console.log(jonas.__proto__ === Person.prototype);

//that confirms that Person.prototype is indeed the prototype of jonas
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));


//thsi very common confusion comes from bad naming of this Person property
//prototype here is prototype of linked objects not prototype of Person
//probably shouldn't be called prototype but instead something like .prototypeOfLinkedObject
console.log(Person.prototype.isPrototypeOf(Person)); // false

//where the __proto property on jonas comes from?
/*
remember the new operator , step 3 
3.{} linked to prototype
-the step number 3 that creates the __proto__ property .
it creates the __proto__ property on the object and sets it's value to the prototype property of the function that's being
called.(the constructor functions).
so this is how javascript knows internally the the jonas object  is connected to the Person.prototype

*/

// we can also set properties on prototype not just methods
Person.prototype.species = 'Homo Sapiens';
console.log(jonas,matilda);
//both the objects jonas and matilda will inherits , so they will access to the species property from the prototype,
//when we access the object in the console , the property is not directly in the object , so it's not it's 
//own property .own properties are only the one that are declared directly on the object itself, not including
//the inherited properties . 
console.log(jonas.species, matilda.species);

//in js there is a  way of checking of the own properties
console.log(jonas.hasOwnProperty('firstName'));
//species property is not really inside the jonas object , it's simply has access to it because of it's prototype, the prototype 
//property of Person
console.log(jonas.hasOwnProperty('species'));

