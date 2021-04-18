'use strict';


////////////////////////////
//Coding challenge #2

/*
1-Re-create challenge1 , but this time using an ES6 class;
2-Add a getter called 'speedUS' which returns the current speed in mi/h
(divided by 1.6);

3-Add a setter called 'speedUS' which sets the current speed in mi/h (but convert it to 
km/h before storing the value, by multiplying the input by 1.6);
4-Create a new car and experiment with the accelerate  and brake methods , and with the getter and setter

DATA CAR1 : 'Ford' going at 120 km/h

Good Luck
*/

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed= speed;
    }
    //the original speed is in km/h => we want to conver it to mies/h so we devide by 1.6
   

    accelerate(){ //there is a difference between that and accelerate = function(){} ...
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed}km/h`);
    }

    brake()
    {
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed}km/h`);
    }
    //transform the method speedUS  to a property using get keyword
    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}

const ford = new Car('Ford', 120);
console.log(ford.__proto__);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50 //(mi/h)
console.log(ford);