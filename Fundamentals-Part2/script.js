'use strict';

let hasDriversLicense = false;
const passTest = true;

// making an error in variable name 
//script.js:8 Uncaught ReferenceError: hasDriverLicense is not defined
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D')


//script.js:10 Uncaught SyntaxError: Unexpected strict mode reserved word.

//strict mode reserved this word so we cannot use them for variable names

const interface = 'Audio';
const private = 534;
