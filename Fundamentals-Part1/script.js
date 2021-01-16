
let  hasDriversLicence = true; 
let  hasGoodVision = true; 

//AND operator in javascript is && 
console.log(hasDriversLicence && hasGoodVision);

hasGoodVision = false;
console.log(hasDriversLicence && hasGoodVision);

//OR operator in js is ||
console.log(hasDriversLicence || hasGoodVision);

//NOT operator in js !
console.log(!hasDriversLicence);

hasGoodVision = true;
const shoulDrive = hasDriversLicence && hasGoodVision;

if (shoulDrive){
    console.log("Sarah is able to drive!");
}else{
    console.log("Someone else should drive");
}

const isTired = false;

console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);


if (hasDriversLicence && hasGoodVision && !isTired){
    console.log("Sarah is able to drive!");
}else{
    console.log("Someone else should drive");
}