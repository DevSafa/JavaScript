//we use the let keyword to declare variables that can change later,
//during the execution of our program .


let age = 30 ;
console.log(age);
//in  technical terms we call this reassigning a value to a variable .or also we say that we mutate the age variable .
age = 31;
console.log(age);

//the value in a const variable cannot be changed
//const keyword creates a variable that we cannot reassign to it .
//birthyEAR IS AN immutable variable.
const birthYear = 1991;
//type error
    // birthYear = 1990;

// we cannot declare empty const variables
    //const job;

// var is basically the old way for defining variables
//at first side it works actually pretty much as let.
// but of course there is difference between let and const.
//yous hould basically never use var 
var job = "programmer";
console.log(job);

job = "nothing";
console.log(job);

// declaring a variable without any keyword (let , const , var) still works
// is a very terrible idea  because it doesn't create a variable in the current scope.
lastName = 'abau';
console.log(lastName);