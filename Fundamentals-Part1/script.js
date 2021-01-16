//////////////////////
//coding challenge #4

/*
Steven wants to build a very simple tip calculator
for whenever he goes eating in a restaurant. In this country , it's usual to tip 15% if 
the bill value is between 50 and 300 . if the value is different ,
the tip is 20%.

1- your task is to calculate the tip, depending on the bill
value. Create a variable called 'tip' for this . It's not allowed to use an if/else statement
.(if it's easier for you , you can start with an if /else statement , and then try to convert it to a ternary operator !)
2-Print a string to the console containing the bill value, the tip, and the final value
(bill + tip).
example : 'the bill was 275 , the tip was 41.25, and the total value 316.25'
TEST DATA : test for bill values 275 , 40 and 430 .

HINT : to calculate 20 of a value , simply multipy it by 20/100 = 0.2
HINT : value x IS BETWEEN 50 AND 300 , if it's >= 50 && <= 300
*/

//const bill = 275;
//const bill = 40;
const bill = 430 ;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15  : bill * (20 / 100);
console.log(`the bill was ${bill} , the tip was ${tip}, and the total value ${bill + tip}`);