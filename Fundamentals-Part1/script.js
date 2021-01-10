
// there is 5 falsy values : 0 , '', undefined , null , NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); //false 
// any string that is not an empty string is a truthy value
console.log(Boolean('Jonas')); //true

console.log(Boolean({})); //{} empty object // true
console.log(Boolean('')); // false 

let  money = 0 ;
// money is a number 
// the number is zero .
//in logical context of an if else statement condition
//js will try to coerce any value into a boolean ,
//js script will convert no boolean value to boolean , and that happen 
//using truthy and falsy value rules 
// 0 is a falsy value . so it converted to false .
if (money) // so here number 0 will be onverted to false . it's like if (Boolean(money))
    console.log("Don't spend it all ;)");
else
    console.log("you should get a job!");


money = 100 ;
if (money) 
    console.log("Don't spend it all ;)");
else
    console.log("you should get a job!");

// check if the variable is defined or no 

let height;
//height is undefined because we didn't assign to it any value yet .
//undefined is a falsy value 
if (height) // this height variable in this logical context will automatically be converted to a boolean 
            // since height is undefined , and undefined is a falsy value , height will be false here .
{
    console.log("Yay! Height is defined");
}else{
    console.log("Height is undefined"); 
}

height = 123;
if (height) 
    console.log("Yay! Height is defined");
else
    console.log("Height is undefined"); 

    // illustrate an example that can be a problem using this approach 
// we will get a problem if the height is  0 
// because 0 is a lso a falsy value
// it's a bug , amn error in our application 
height = 0;
if (height) 
    console.log("Yay! Height is defined");
else
    console.log("Height is undefined"); 