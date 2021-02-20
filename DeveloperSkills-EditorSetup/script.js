//Remember , we're gonna use strict mode in all scripts now!
'use strict';

// using the console to find a BUG and fix it 
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celius',
    //the value of measurement will come from a prompt
    //value: prompt('Degrees celsius:'),
    //C)//FIX THE BUG
    value: Number(prompt('Degrees celsius:')),
  };

  //the prompt always return a string
  console.log(measurement);

  //B)Find the BUG
  //another way of showing objects in the console
  console.table(measurement);
  //console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  //coonvert from celsius to kelvin by adding 273
  const Kelvin = measurement.value + 273;
  return Kelvin;
};
//A)Identify the BUG
console.log(measureKelvin());


