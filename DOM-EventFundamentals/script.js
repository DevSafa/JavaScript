'use strict';

// the first basically DDOM manipulation : selecting an element
console.log(document.querySelector('.message'));

//let's get the text from that element that we selected
//the execution is done from left to right
//getting the text content
console.log(document.querySelector('.message').textContent);

//set the text content of the element of teh class message
//manipulate the text content of one of the DOM nodes
document.querySelector('.message').textContent = 'Correct Number!';

//get the text of the element
console.log(document.querySelector('.message').textContent);

// select the elemnt with teh class number and class score
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// we get an empty value because there is really nothing in there
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

