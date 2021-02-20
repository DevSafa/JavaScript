'use strict';

// the first basically DDOM manipulation : selecting an element 
console.log(document.querySelector('.message'));

//let's get the text from that element that we selected
//the execution is done from left to right
console.log(document.querySelector('.message').textContent);
