'use strict';


//we learned about constructor functions and ES6 classes ,
//but actually there is a third way of implementing prototypal inheritance or delegation as we can also call it 

//that third way is to use a function called Object.create which works in different way than constructor functions  and classes

//with Object.create they still the idea of prototypal inheritance , however , 
//there are no prototype properties involved  and also no constructor functions , and no new operator.
//. so instead we can use Object.create to essentially manually set the prototype of an object to any other
//object that we want.

//if we can set the prototype to any object , let's actualy create an object , that 
//we want to be the prototype of all the person objects.

//this object will be the literaly the prototype of all the persons object
const PersonProto = {
    //that's the method that we want the Person object to inherit
    calcAge(){
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName= firstName;
        this.birthYear=birthYear;
    }
}

//create a person object wth the PersonProto as prototype
// it will return a new object  that is linked to the prototype PersonProto
// steven is an empty object , and it will be linked to this PersonProto object which will be it's 
//prototype.
//implement prototypal inheritance but in differnt way
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

//when we use the new operator in constructor functions or classes it automatiically
//sets the prototype of instances to the constructor prototype property . this happens automatically.

//on the other hand with Object.create , we can set the protoype of object  manually to any object
//that we want. in our case , we manyually set the prototype of steven object to the PersonProto object
//now the two objects are linked throught the proto property just like before.

//Object.create in real world is the least used way for implementing prototypal inheritance

// we will nedd Object.CREATE to link prototypes in next lecture in order to implement inheritance between classes

//it will be exactly the object that we specify inside Object.create() METHOD : PersonProto
console.log(steven.__proto__);
console.log(steven.__proto__===PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah',1979);
sarah.calcAge();

console.log(sarah);
console.log(steven);

//Object.create() create a new object and the prototype of that object is the object that we pass to create method
