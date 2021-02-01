'use strict'

/////////////////////////
//coding challenge #3

/*
Let's go back to mark and john comapring their BMIs!
This time , let's use objects to implement the calculations!
Remember :BMI = mass /height **2 = mass /(height *height).
(mass in Kg and height in meter).

1-For each of them , create an object with preperties for their full 
name , mass , and height (mark Miller and john Smith)
2-create a 'calcBMI' method on each object to calculate the BMI
(the same method on both objects).
Store the BMI value to a property , and also return it from the method.
3- Log to the console who has the higher BMI , together with the full name 
and respective BMI .
Example :"john Smith's  BMI (28.3) is heigher than mark Miller's (23.9)!"

TEST DATA : mark's weights 78kg and is 1.69 m tall .
    john weights 92 kg and is 1.95 m tall .

GOOD LUCK
*/

const mark ={
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass /this.height ** 2;
        return this.bmi;
    }
}

// (we can avoid repeating the same function in objects using Object oriented Programming ,...)->later

const john = {
    fullName :"John Smith",
    mass :92,
    height : 1.95,
    calcBMI :function(){
        this.bmi = this.mass /(this.height * this.height);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();

console.log(`${mark.bmi > john.bmi 
? 
`${mark.fullName}'s BMI (${mark.bmi}) is heigher than ${john.fullName}'s BMI (${john.bmi})`
: 
`${john.fullName}'s BMI (${john.bmi}) is heigher than ${mark.fullName}'s BMI (${mark.bmi})`}`
)

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is heigher than ${john.fullName}'s BMI (${john.bmi})`)
}else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is heigher than ${mark.fullName}'s BMI (${mark.bmi})`)
}