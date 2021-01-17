'use strict';

//function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

//Arrow function ; it's a special form of function expression ; it still a function expression actually .
//////////////////

// one parameter , one line of code when we return .
birthYear => 2037 - birthYear;

// to use the arrow function we store it in a variable:
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//one parameter , more than one line of code
const yearsUntilRetirement1 = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // write return explicitly , because we have more than one line in function definition .
    return retirement;
}

console.log(yearsUntilRetirement1(1991));
//more than one parameter
const yearsUntilRetirement2 = (birthYear,firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    // write return explicitly , because we have more than one line in function definition .
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2(1997 , 'Safa'));
console.log(yearsUntilRetirement2(2004 , 'Inas'));