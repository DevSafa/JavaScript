

/*
const yearsUntilRetirement = (birthYear, firstName)
=>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    //return retirement
    return `${firstName} retires in ${retirement} years`;
}
*/

const calcAge = function(birthYear){
    return 2037 - birthYear;
}
// we will transfer it to a more normal function expression 
// a regular function expression 
const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0)
    {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement; // the return keyword will immediatly exit the function .
    }
    else
    {
        console.log(`${firstName} has already retired`);
        return -1 ;
    } 
}

console.log(yearsUntilRetirement(1991 , 'Safa'));
console.log(yearsUntilRetirement(1970 , 'Mike'));
