'use strict'

for (let rep = 1 ; rep <= 10 ; rep++)
{
    console.log(`Lifting weights repetition ${rep}`);
}

console.log('-------------');

let rep = 1;
while (rep <= 10)
{
    console.log(`While: Lifting weights repetition ${rep}`);
    rep++;
}

console.log('--------------');

//math.random => create a decimal number between 0 and 1
//math.trunc() => remove the decimal part
//Math.trunc(Math.random() * 6)  => get a number between 0 and 5
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6)
{
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)console.log('Loop is about to end...');
}