'use strict'

//create jonas object

const jonas = {
    firstName :'Jonas',
    lastName :'Schmedtmann',
    birthYear :1991,
    //string value
    job : 'teacher',
    friends :['Michael' ,'Peter','Steven'],
    // aboolean value
    hasDriversLicense :true,
    // add name of the function as a property
    //a function value
    calcAge: function(birthYear){
        return 2037 - birthYear;
    }
};

//access the method using Dot notation
//jonas.calcAge is computed -> it become the function value
console.log(jonas.calcAge(1991));

//we can also access the method using the bracket notation
//we access the property calcAge using the bracket
//jonas['calcAge] will be replaced basically with the function.
console.log(jonas['calcAge'](1991));

console.log('-----------------------');

//using this keyword
const safa = {
    firstName :'Safa',
    lastName :'Barka',
    birthYear :1997,
    //string value
    job : 'Developper',
    friends :['Soukaina' ,'Inas','Asmaa'],
    // aboolean value
    hasDriversLicense :true,
    //inside the method the This keyword  point to the jonas object
    calcAge: function(){
        console.log(this);
        return 2037 - this.birthYear;
    }
};
//dot notation
console.log(safa.calcAge());
//bracket notation
console.log(safa['calcAge']());

console.log(safa.calcAge());
console.log(safa.calcAge());
console.log(safa.calcAge());
console.log(safa.calcAge());

console.log('---------------------------');


const inas = {
    firstName :'Inas',
    lastName :'Abau',
    birthYear :2004,
    friends :['Soukaina' ,'Inas','Asmaa'],
    hasDriversLicense :false,
    calcAge: function(){
        //creating the property age
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

console.log(inas.calcAge());

//retreive the property that we already calculated before
console.log(inas.age)
console.log(inas.age)
console.log(inas.age)
console.log(inas.age)


//write a method called getSummary , and this method should return a string that summarizedata about inas
//"Jack is a 46-year old techear,and he has a driver license"

const jack = {
    firstName : "Jack",
    birthYear : 1991,
    hasDriverLicense :true,
    job:"Teacher",

    calcAge : function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} , and he has
            ${this.hasDriverLicense ? `a` : `no`} driver's license.`;
    }
}
console.log(jack.getSummary());


