'use strict'

///////////////////////////
//coding challenge #4

/*
Let's improve Steven's tip calculator even more , this time using loops!
1- create an array bills containing all 10 test bill values
2-create empty arrays for the tips and the totals ('tips' and 'bills')
3-Use the 'calcTip function we wrote before (no need to repeat) to calculate tips and total
values (bill + tip) for every bill value in the bills array.
Use for loop to perform the 10 calculations!
TEST DATA :22 , 295 , 176 , 440 , 37 , 105 , 10 ,1100, 86 and 52

HINT : Call calcTip in the loop and use the push method to add values
to the tips and total arrays.

4-BONUS : write a function 'calcAverage' which takes an array called 'arr'
as an argument . This function calculates the average of all numbers in the given array .
This is a Difficult challenge (we haven't done this before) !Here is how to solve it :
    4-1. first you will need to add up all values in teh array . to do addition , start 
    by creating a variable 'sum' that starts at 0 . then loop over the array using 
    a for loop .In each iteration , add the current value to the 'sum' variable.
    this way, by the end of the loop , you have all values added together 
    4-2. to calculate the average , divide the sum you calculated before by the length of the array
    (because that's the number of elements)
    4-3 -Call the function with the 'totals' array 
GOOD LUCK
    */


const bills = [22, 295 , 176 , 440 , 37 , 105 , 10, 1100, 86, 52];
const tips =[];
const totals =[];

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15  : bill * (20 / 100);


for (let  i = 0 ; i < bills.length ; i++)
{
    //in each iteration anew tip variable will be created , so we are not changing the origin tip taht we declare
    //so that why we declare it const
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
 }

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0 ; i <= arr.length -1 ; i++)
        sum += arr[i];
    return sum /arr.length;
}

console.log(`average of totals array : ${calcAverage(totals)}`);
console.log(`${calcAverage(tips)}`);