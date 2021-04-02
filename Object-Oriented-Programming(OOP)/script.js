'use strict';

// we learned how to implement prototypal inheritance with constructor functions
// and then manually setting methods on the constructor functions prototype property

// now it's time to return our attention to ES6 classes which essentially allow us to do the same exact
//thing but using a nicer and more modern syntax.

// classes in javascript does not works like classes in other languages like Java pr c++.
//instead classes in java script are just synthetic sugar over what we learned in the last few videos.

//classes still implement prototypal inheritance behind the scenes , but with a syntax that 
//makes more sense to people coming from other programming languages , and that was basically the goal of adding 
//classes to javascript.

// implemet Person using a class
// classes are just special types of functions 
// behind the scenes classes are still functions  , and therefore we have class expression and class declaration

//class expression
    // const PersonClass = class {

    // }

//class declaration
class PersonCl{

    //add a constructor method  => it work in similar way as a constructor function 
    //it's a method of this class
    constructor(firstName, birthYear)
    {
        //the act of creating an object is also works in similar way as previous , using the new 
        //operator , this constructor will automatically be called when using new operator
        
        //set the properties of the object
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // add methods
    // all the methods that we create in the class outside the constructur will be on the 
    //prototype of the objects.
    // and not in the objects themselves
    // this is really just like before prototypal inheritance
    // these methods will be automatically be added to the prootype property  of the class basically

    calcAge(){
        console.log(2037 - this.birthYear);
    }
    greetI(){
        console.log(`Hey ${this.firstName}`);
    }
}


const jessica = new PersonCl('Jessica',1996);
console.log(jessica);
jessica.calcAge();
//PersonCl acts just like any constructor function but  with alittle bit nicer syntax
console .log (jessica.__proto__ === PersonCl.prototype);

//adding a method manually to the prototype
PersonCl.prototype.greetO = function(){
    console.log(`Hey ${this.firstName}`);
}
// this prouve one more time that the class really just hides the true nature 
//of prototypal inheritance in javascript
//this is great for people who are coming from another language and have experience with OOP
// because it's going to be a bit easier for these developpers to start writing OOP code in javascript 
// just make sure to understand construction functions , prototypes , and while prototype chain logic 

jessica.greetO();
jessica.greetI();

//1-classes are not hoisted even if they are  class declarations
    //function declarations remember are hoisted which means we can use them  before they are declared in the code 
    //but with classes that doesn't work 
//2- just like functions classes are alsso first class citizens ; that means
    //that we can pass them into functions and also return them from functions , that because classes
    //are really special kind of function behind scenes
//3- the body of the class is always executed in strict mode, and o even if we didn't activate it for our entire script
    // all the code that is in the class will be executed in strict mode

console.log("--------------------------------------");

const Person = function(firstName , birthYear)
{
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge= function(){
    console.log(2037 - this.birthYear);
}
const max = new Person("Max", 1997);
console.log(max);
max.calcAge();
console.log(max.__proto__ ===  Person.prototype);

//should use constructor functions  or if instead better to use classes
// constructor functions are not like old or depracated syntax , it's 1000% fin to keep using them 
