'use strict';


//static methods
/*
example:
*/
console.log(Array.from(document.querySelector('h1')));
console.log(Array.from(document.querySelectorAll('h1')));
//the from method here is really a method that is atatched to the Array constructor
//so we could not use the from() method on an array 
    //console.log([1,2,3].from()) //-->it will not work.
//the from() method is really atatched to the entire constructor , the Array constructor and not to the 
//prototype property of the constructor, therefore , all the arrays do not inherit this method from(), because it's not on their prototype
//it simply atatched to the constructor itself
//we can also say that from() method is on the Array namepace


//constructor function and new keyword
const Person= function(firstName, birthYear)
{
    this.firstName= firstName;
    this.birthYear= birthYear;
};

//creat jonas object
const jonas =new Person('jonas',1991);
console.log(jonas);


// add a static method to the constructor function
Person.hey = function(){
    console.log('Hey there .');
    //whanever the object calling the method will be the this keyword inside the method
    console.log(this);
};

Person.hey();

//the hey() method is not inherited
//the hey() method is not in the prototype of jonas object , so there is no way that jonas object could inherit it 
//we cannot say jonas.hey();

//class declaration

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

   //create static method
   //the static methods are not available on the instances
   static hey(){
       console.log('Hey from Class');
       
   } 
}

PersonCl.hey();