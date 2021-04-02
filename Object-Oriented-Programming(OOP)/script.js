'use strict';

//class declaration
class PersonCl{

    constructor(fullName, birthYear)
    {
        //whenever we set the fullName on this keyword ,
        //then actually the method set fullName() ; the setter , will is gonna be executed
        // and so that name that we pass in a s fullName will become the name argument for fullName
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2037 - this.birthYear);
    }
    greet(){
        console.log(`Hey ${this.fullName}`);
    }

    //add a getetr for the age property
    /// it's like any regular method that we set in prototype
    
    get age(){
        return 2037 - this.birthYear;
    }
    // getters and setters can be very useful for data validation 
    // both the setetr function and constructor function are trying to set the exect same property name
    // so that gives the macimum call error .
    //when we have a setter which is trying to set a property that does already exist 
    // as a convention we add undescore .
    //it's just a different variaable name to avoid that naming conflict.
    // however when we do _fullname , we are creating a new variable .

    //this pattern here is important to understand . 
    //set a property that already exists
    set fullName(name){
        console.log(name);
        if(name.includes(' '))
            this._fullName = name;
        else  
            alert(`${name} is not a full name!`);
    }

    get fullName(){
        return this._fullName;
    }
}


const jessica = new PersonCl('Jessica D',1996);
console.log(jessica);
jessica.calcAge();
console .log (jessica.__proto__ === PersonCl.prototype);
jessica.greet();
console.log(jessica.age);

const walter = new PersonCl('Walter',1965); // check in the console walter PersonCl {birthYear: 1965}
const walter1 = new PersonCl('Walter White',1995);

// we use getters and setters when we need especially a validation  by the time we are creating
//a new object, that essentially what setter here does

console.log("----------------------------------");
//every Object in javascript can have setter and getter properties
//we call these special properties accessor properties,
//while the normal properties are called Data properties
//getters and setters are basically functions that get and set a value, but on teh outside
//they still look like regular properties

//object litteral
const account = {
    owner: 'jonas',
    movements: [200,530,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    },

};

// we use getter as a property

console.log(account.latest);
account.latest = 50 ; // not account.latest(50)
console.log(account.movements);

console.log(account);
// classes also have getters and setters