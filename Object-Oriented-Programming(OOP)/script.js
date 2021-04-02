'use strict';

//let's now check out prototypal inheritance 
//and the prototype chain on built-in objects such as arrays

'use strict';

//Prototypes
const Person = function(firstName, birthYear){
  
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function (){
    console.log(2037 - this.birthYear);
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
const matilda = new Person('Matilda',2017);
jonas.calcAge();
matilda.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//this the prototype of jonas which is exactly the prototype property of Person
console.log(jonas.__proto__);

// move on on theprototype chain and take a look on the prototype of jonas prototype
//the prototype property of Object
//Object.prototype is usualy on top of the prototype chain
console.log(jonas.__proto__.__proto__);

//Null  ; 
console.log(jonas.__proto__.__proto__.__proto__);

//can't read property __proto__ of NULL
//console.log(jonas.__proto__.__proto__.__proto__.__proto__);

//remember that person.prototype itself  has a constructor property, wich will point back to he person itself
//the function itself
console.log(Person.prototype.constructor)
//if we want to inspect that function we use console.dir
//the constructor property points back to Person
console.dir(Person.prototype.constructor);

// any function of coure is also an object so therefore it also has a prototype

//create an array
const arr = [3,5,5,10,1,0,10,0];

// take a look of the prototype of the array 
// in the prototype of the array we find all these methods that we already know 
console.log(arr.__proto__);
// each array does of course not contain all the methods but instead each array will inherit 
//these methods from it's prototype

//the prototype property of the constructor gonna be the prototype of all the objects created 
//by that constructor

console.log(arr.__proto__ === Array.prototype);

// just like object using [] is the same like using new Array (new Array = [])
// when we create an array like this [] , it'is created by the array constructor

//Object prototype
console.log(arr.__proto__.__proto__);

// if we check documentation mdn about filter() function , we found that the name is Array.prototype.filter()

//the prototype inhertance is really a mechanisme for reusing code , all the built methods have to exist only once
//somewhere in the javascript engine  , and all the arrys in our code get access to the functions throught the prototype chain , and prototypal inheritance.

// we know that any array inherit methods from it's prototype
// we can use that knowledge to extend functionalities of arrays 

//add any new method to the prototype property of Array constructor
Array.prototype.unique = function(){
    return [...new Set(this)];
}

// Array.prototype.__proto__.unique = function(){
//     return [...new Set(this)];
// }

// return an arry with only unique values
// we addeda new method to the prototype property  of the array constructor
// therefore all arrays will inherit unique() method, we can then call that method ona ny array that we want 
console.log(arr.unique());


// extending the prototype of built -in objects is generaly not a good idea
// the next version of js may add a mehod with the same method that we adding , and may works in different way , and your code will use it 
// when you work in a team of developpers this really gonna be a bad idea

 
// select a DOM element , we already know that DOM elements are behind the scenes objects
const h1 = document.querySelector('h1');

// the prototype of that object is an HTMLHeadingElement
//HTML element is a child elemnt of Element
//Element itself was a child of Node , therefore the prototype of Element gonna be Node
//the end of prototype chain is Object
console.dir(h1); // get the actual object

// the function itself is a lso an object , therefore it also had a prototype 
// the prototype will then contained the methods  that we have use previously on functions 
//this is the reason we can actualy call methods  on functions , it because they are objects and objects have prototypes
// and in this case  is the function prototype  
console.log(x=>x + 1);