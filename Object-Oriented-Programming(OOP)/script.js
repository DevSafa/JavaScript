'use strict';

//////////////////////////////////
//Coding Challenge #1

/*
1-Use a constructor function to implement a Car. A Car has a make and speed
property.the speed property is the current speed of the car in km/h;
2-Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console.
3- Implement a ' brake' method that will decrease the car's speed by 5, and loke the new speed to the console.
4- Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them

DATA CAR1 :'BMW going at 120 km/h
DATA CAR2: 'Mercedes' at 95km/h

*/

const Car = function(make, speed)
{
    this.make = make; 
    this.speed= speed;
};

//thesse methods forms the public interface of the object 
Car.prototype.accelerate = function()
{
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}

Car.prototype.brake = function()
{
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}

const bmw = new Car('BMW',120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

const mercedes = new Car('Mercedes' ,95);
console.log(mercedes.make, mercedes.speed);
mercedes.accelerate();
mercedes.brake();

