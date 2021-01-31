'use strict'

const  jonas = {
    firstName :'Jonas',
    lastName : 'Schmedtmann',
    age :2037 - 1991,
    job :'Teacher',
    friends :['Michael','Peter', 'Steven']
};
console.log(jonas);

//getting a property from the object
// using dot
console.log(jonas.lastName);
//using bracket
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//we cannot dot
//console.log(jonas.'last' + nameKey)

//create a pop up window with an input field , and store the input inside the variable
const interestedIn = prompt("What do you want to know about Jonas?choose between firstName, lastName , age , job , and friends");

console.log(jonas.interestedIn); // the result is undefined
//we get undefined  when we try to access a property in the object that does not exist.

//undefined is what we get when we try to access a property on an object that does not exist ,
//so jonas does not have a property called InterestedIn

//so intead of dot notation , we use the bracket notation
console.log(jonas[interestedIn]); //it replace InterestedIn when the value of the variable

//undefined is a falsy value

//when the user access a property that doesn't exits.

if (jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request!choose between firstName, lastName , age , job , and friends');
}


//how to use dot and bracket notation to add properties to a new object

jonas.location ='Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Cahllenge
//"Jonas has 3 friends , and hist best friend called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends , and his best friend called ${jonas.friends[0]}`);