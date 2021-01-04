
const age = 15;

const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('Sarah can start driving license');
}

if (age >= 18){
    console.log('Sarah can start driving license');
}else{
    //we will calculate how many yesrs left to sarah to take her licence
    const yearsLeft = 18 - age;

    console.log(`Saraha is too young . wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
//century in which person was born
if (birthYear <= 2000){
     century = 20;
}else {
     century = 21;
}

console.log(century);


