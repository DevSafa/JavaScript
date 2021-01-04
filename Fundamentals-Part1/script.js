const firstName ="Inas"
const job = "Doctor"
const birthYear = 1991;
const year = 2037;
//let's use this variables to build a string 

//js will convert a number to a string so then it can concatenate them , join them with the rest of the strings
const inas = "I'm " + firstName + ', a ' + (year - birthYear) 
            + ' years old ' + job + ' !';
// it's a pain to manage all this spaces using the concatenation operator (+)
console.log(inas);

//using template literales -> an easy way .
//insid the curly braces we can write any javaScript expression.
const inasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(inasNew);

console.log(`Just a regular string...`);

//multilines string before ES6
console.log('String with \nmultiple \nlines');

 console.log('String with\n\
 multiple\n\
 lines');

//with template strings tthere is a n easy way to do that
//we can just hit ENTER.
//we use back ticks to create multiline HTML elements
//to insert them into a page dynamically .
 console.log(`String with
 multiple
 lines`);