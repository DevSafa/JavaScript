//Remember , we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////
//Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays 
A String with these temperatures.

example :[17,21,23]  will print
    "...17C in 1 days...21C in 2 days...23C in 3 days..."
create a function 'printForecast' which takes in an array 'arr'
and logs a string like the above to the console.

Use the problem-solving framework :Understand the problem and break it up into 
sub-problemes!

TEST DATA 1 : [17,21,23]
TEST DATA 2 : [12,5,-5,0,4]

*/

//SOLUTION

//1)understanding the problem
// -Arary transformed to string ,separated by ...
// -What is the X days? Answer :index + 1

//2)Breaking up into sub-problems
// - transform array into string
// - transform each element to string with °C
// - string to contain day (index + 1)
// - add ...  between elements and start and end of string
// - Log string to console
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) str += `${arr[i]}°C in ${i + 1} days ... `;
  console.log('...' + str);
};

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
printForecast(arr1);
printForecast(arr2);
