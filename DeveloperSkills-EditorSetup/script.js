//Remember , we're gonna use strict mode in all scripts now!
'use strict';

//Find a Bug using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);


  // find the bug using the debugger
  // let max = 0;
  // let min = 0;
  
  //fix the bug 
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {

    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    //js had a ddebugger statement , so when the browser see debugger;
    //it will automatically open the debugger tool .
    //debugger;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max , min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//A)Identify the Bug
console.log(amplitudeBug);
