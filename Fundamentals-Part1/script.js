
////////////////
// Coding challenge #2
/*
    Use the BMI example for challenge #1 , and the code you already wrote
    and improve it:

    1- Print a nice output to the console, saying who has the higher BMI.The message can be either 
        "Mark's BMI is higher that john's!" or "John's BMI is higher than Mark's!"
    2- Use a template literal to include the BMI values is the outputs.Example:"Mark's BMI (28.3) is higher
        than john's (23.9)"

    HINT : Use an if/else statement
    GOOD luck~
*/


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

//1------------

if (BMIMark > BMIJohn)
    console.log("Mark's BMI is higher that john's!");
else
    console.log("John's BMI is higher than Mark's!");

//2-------------

if (BMIMark > BMIJohn)
    console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})`);
else
    console.log(`John's BMI (${BMIJohn}) is higher than mark's (${BMIMark})`);
