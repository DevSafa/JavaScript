
const age = 15 ;

age >= 18 ? console.log("I like to drink tea") :
 console.log("I like to drink water"); // the else part 

 // the whole operator here is an expression , and the expression produce a value 
 const drink = age >= 18 ? 'wine' : 'water';
 console.log(drink);

 let drink2;

 //we need to declare the variable outside the if -else block , because
 //any variable declared inside the block is nota vailable outside.
 if (age >= 18){
     drink2 = 'wine';

 }else{
     drink2 = 'water';
 }
 console.log(drink2);

 // using ternary operator , we're able to transform this  if-else block of code
 // into one small operation . 

 //using ternary operator in template literal .
 console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);