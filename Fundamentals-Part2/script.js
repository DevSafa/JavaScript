'use strict'

const friends = ['Michael' , 'Steven' ,'Peter'];

console.log(friends);

//push method adds elements to the end of an array
friends.push('Safa');

//push is technically  function , so it can return something .
//the return value of push is the length of the new array .
let newLength = friends.push('Inas');

console.log(`array : ${friends}\nlength after push  : ${newLength}`);

//add elements to begening of the array : unshift() method
newLength = friends.unshift('Soukaina');
console.log(`array : ${friends}\nlength after unshift: ${newLength}`);


//remove elemnets : pop method
friends.pop();
console.log(friends);
friends.pop();
friends.pop();
console.log(friends);

//pop remove the last elements of the array , we don't need to pass 
//argument to it .
//pop method returned the removed element

let popped = friends.pop();
console.log(`removed element is : ${popped}\n array : ${friends}`);


//remove the first element of the array 
popped =  friends.shift();
console.log(`removed element is : ${popped}\n array : ${friends}`);

//which position a certain element is in the array  ?
friends.push('Safa');
console.log(friends);

console.log(friends.indexOf('Safa'));
console.log(friends.indexOf('Michael'));
//not an element in the array
console.log(friends.indexOf('BoB'));

//ES6 method
//instead of returning the index of the element , we simply it return true 
//if the element is in the array , and false if it's not.

console.log(friends.includes('Steven'));
console.log(friends.includes('Safa'));
console.log(friends.includes('Michael'));


friends.push(23);
console.log(friends.includes('23')); // that's because it test with strict equality , doesn't 
                                    // do type coercion .
console.log(friends.includes(23));
if (friends.includes('Safa'))
{
    console.log('You have a friend called Safa');
}