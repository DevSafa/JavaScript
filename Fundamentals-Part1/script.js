
/*
//print a the value 'Jonas' in  the console
console.log("Jonas");
console.log(23);
console.log(40 + 8 + 23 - 10);

//this will create a real variable in your computer memory  and store this value 'safa' inside of that variable 
let firstName = "Inas";

//declare a variable called js and assign to it the value "amazing"
let js = "amazing";

console.log(firstName);
console.log(firstName);
console.log(firstName);

firstName = "Safa";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let safa$inas = "SI";
console.log(safa$inas);

let safa_inas = "S_I";
console.log(safa_inas);

let $safa$inas$ = "safainass";
console.log($safa$inas$);

let PI = 3.1415;

//the variable names myFirstJob , myCurrentJob are more descriptive
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

//the variables names job1 , job2 are less descriptive 
let job1 = "programmer";
let job2 = "Teacher";

console.log(myFirstJob);
//error
    //let 3years = 37; 
    //let jonas&matilda = 'JM'; 
    //let new 27; mew is a reserevd keyword in js 
    
*/

// true is a boolean value
console.log(true);

//declaring a variable name , and assign to it a boolean value
let javaScriptIsFun = true;
console.log(javaScriptIsFun);


//using typeof operator to get the type of value 
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'INAS');
console.log(typeof "INAS");

//dynamic typing means that we can simply change the type of a value that is hold by a variable

javaScriptIsFun = 'NO!';
//change the data type from boolean to string
console.log(typeof javaScriptIsFun);

let year;
//whenever we declared an empty variables , the value of the variable will be undefined ,
//and the type of teh variable is also undefined.
//we should see undefined
console.log(year);
console.log(typeof year);

//reassign the variable year that already hold undefined value.
year = 8787;
console.log(year);
console.log(typeof year);

console.log(typeof undefined);
// the js says that type of null is object , and this doesn't make any sense at all 
// this is regarded as bug or error in js .
//the expected output is null 
// this bug is never correted because of legacy reasons ,(null is not an object).
console.log(typeof null);


