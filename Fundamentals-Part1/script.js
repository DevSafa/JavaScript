let age = 18;

if (age === 18) console.log("You just became an adult");
//strict eqyality operator
console.log(18 === 18);
console.log(18 === 19);
//loose equality operator
console.log('18'== 18) // '18'string will be converted to a number

console.log('18' === 18);

if (age === 18 ) console.log("you just become an adult :D (strict)");
if (age == 18 ) console.log("you just become an adult :D (loose)");

age = '18';
if (age === 18 ) console.log("you just become an adult :D (strict)");
if (age == 18 ) console.log("you just become an adult :D (loose)");

//use of prompt() function
//ask the user for his favorite number
const favourite =prompt("WHAT'S you favourite number?");
console.log(favourite); 
console.log(typeof favourite);

// the loose equality operator will do type coercion
if (favourite == 23){
    console.log("Cool! 23 is an amzaing number!(loose)");
}

if (favourite === 23){
    console.log("Cool! 23 is an amzaing number!(strict)");
}

const fav = Number(prompt("What is your favourite number ?"));
console.log(fav);

if (fav === 23){
    console.log("Cool! 23 is an amzaing number!(strict)");
}else if (fav === 7){
    console.log("Cool! 7 is an amzaing number!(strict)");

}else if (fav === 9){
    console.log("Cool! 9 is also a cool  number!(strict)");
}else{
    console.log("Number is not 23 or 7 ");
}

if (fav !== 23) console.log ("Why not 23 ?");
