
//defining a function
// this function doesn't produce any value , it just print to the console.
//technically it produces undefined , but we dont save the undefined value .
function logger(){
    console.log('My name is Jonas');
}

// invoking / runing / calling the function
logger();
logger();
logger();

// we can do , but doesn't make any sense
logger(150);

//pass data into a function. 
//a function can also return data as well.
//receive data anad return data back.
//parameters are like variable that are specific only to that function .
//and they  will get defined once we called the function .

// create a very generic function that works for any number of apples and oranges.
function fruitProcessor(apples, oranges){
   // console.log(apples, oranges);
    //building a string using the input data that we get into the function
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    //return a value from the function
    return juice;
}

fruitProcessor(5, 0);
// if we want that value that was returned , we need to store it in a variable
// we called fruitProcessor() functions with two argument ; 5 and 0 
// and these arguments are the actual value of the function parameters which are apples and oranges .
// when the function is runing , apples will be 5 and oranges will be 0 .
// saving the result of the function in a variable.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2 , 4);
console.log(appleOrangeJuice);

//built-in function
const num = Number('234');
console.log(num);