//Remember , we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM 1
/*we work for a company building a smart home thermometer.
OUR MOST RECENT task is this :"Given an array of temperatures
of one day , calculate the temperature amplitude .
keep in mind that  sometimes there might be a sensor error ."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1)understanding the problem
//what is temp amplitude?
//how to compute max and min temperatures?
//what's a sensor error?and what to do ?

//2)Breaking up into sub-problems
//how to ignore errors?
//find max value in temperature array
//find min value in temp array
//substract min from max (amplitude) and return it .

//SOLUTION
//temperature amplitude is the difference between the highest
//and lowest temperature in the array

const calcTempAmplitude = function (temps) {
  // find max  and min
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (temps[i] != 'error' && temps[i] > max) max = temps[i];
    if (temps[i] != 'error' && temps[i] < min) min = temps[i];
  }
  //console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
//console.log(`amplitude is : ${calcTempAmplitude(temperatures)}`);

//PROBLEM 2
//1)understanding the problem
//with 2 arrays , should we implement functionality twice ?
//    NO! just merge two arrays

//2)Breaking up into sub-problems
// - How to merge 2 arrays?

//SOLUTION

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  // find max  and min
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (temps[i] != 'error' && temps[i] > max) max = temps[i];
    if (temps[i] != 'error' && temps[i] < min) min = temps[i];
  }
  //console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3,5,1] ,[9,0,5]);
console.log(amplitudeNew);
