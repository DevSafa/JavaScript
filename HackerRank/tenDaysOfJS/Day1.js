'use strict'
//Day 1: Arithmetic Operators
/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/

//const getArea = (length , width) => length * width;

    function getArea(length, width) {
        let area;
        if (length >= 1 && length <= 1000 && width >= 1 && width <= 1000)
            area = length * width;
        return area;
    }

console.log(getArea(3,4.5));
/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/

//const getPerimeter = (length , width ) => (length + width ) *2;

    function getPerimeter(length, width) {
        let perimeter;
        if (length >= 1 && length <= 1000 && width >= 1 && width <= 1000)
            perimeter = 2 *(length + width);
        return perimeter;
    }

console.log(getPerimeter(3,4.5));

console.log('-----------------');
//Day 1: Functions
/*
*Implement a function named factorial that has one parameter: an integer,n . 
    It must return the value of  n factorial.
* 1 <= n <=10
*the function must return the value of n factorial

*/

function factorial(n){
   let fact = 1;
    while (n >= 1)
    {
        fact *= n;
        n--;
    }
    return fact;
}

console.log(factorial(4));