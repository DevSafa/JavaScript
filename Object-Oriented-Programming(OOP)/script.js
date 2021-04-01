'use strict';

//Prototypes
//how Prorotypal Inheritance /Delegation works
//--------------------------------------------

/**everything starts with the Person constructor function that we've been developing.
 * 
 *this constructor function has a prototype property which is an object ,

 *and inside that object we defined  the calcAge method.

 *Person.prototype itself actually also has a reference back to Person , which is the constructor property.
 
 *essentially Person.prototype.constructor  it's gonna point back to person itself.
 
 *remember that Person.prototype is actually not the prototype of Person , but of all the 
 *objects that created through the Person function.


 */

 //how an object is created using the new operator and constructor function
 //------------------------------------------------------------------------

 //when we call a function, any function with new opwerator 
 //the first thing that's gonna happen is that a new empty object is created instantly
 //then thsi keyword in the function call is set to the newly created object
 //inside the function execution context this is now the new empty object 
 //the new object is linked (__proto__property) to the constructor function's prototype property
//Person.prototype is now the new object prototype which is denoted in __proto__ property of jonas
//__proto always points to an object prototype , and that is true for all objects in jvascript
//finally the new object is automatically returned from the constructor function call unless we 
//explicitly returned something else, but in constructor function like person we usually never do tha.



//this whole process that just explained , is how it works with functions constructors and ES6 classes
//but not with the Object.create syntax that we gona use later


//why this technique so powerful and useful
//--------------------------------------------
/**
 * jonas.calcAge()
 * we're attempting to call calcAge function on jonas object .
 * javascript cannot find the calcAge function directly on jonas object , it ' is simply not there .
 * what's happens now in this situation?
 * if a property or a method cannot be found on certain object , javascript will look into it's prototype,
 * and there is the calcAge function that we are looking for , so javascript will simply use this one.
 *  this behavior that we descripe is what we call PROTOTYPAL INHERITANCE/DELEGATION
 *  so the jonas object inherited the calcAge method from it's prototype ,
 * or in other words it delegated the calcAge functionality to it's prototype
 * the beauty of this is that we can create as many object that we like , and all of them will then
 * inherit this method calcAge().
 * so we can call this calcAge method on all the person objects without the method being directly attached 
 * to all the objects themselves .
 * and this essential for code performance.
 * the all objects can use the calcAge function from them common prototype
 * the ability of looking up methods and properties ina  prototype is what we called the prototype chain 
 * the jonas object and it'sprototype is basically formed a prototype chain 
 */


 //let's understand the prototype chain better 
 //------------------------------------------

 /**
  * let's remember that Person.prototype itself is also an object , and all objects in javascript have a prototype
  * therefore Person.prototype itself must also have a protoype, 
  * and the prototype of Person.prototype is  Object.prototype,
  * why is that ?
  * well , Person.prototype is just a simple object , which means that it has been built by the built -in 
  * object constructor function , and this is the function that has called behing the scenes whenever we want to create a litteral object
  * an object simply with curly braces {...} === new Object(...) , curly braces is a shortcut of calling a new Object.
  * what's matter here is that Person.prototype itself needs to have a prototype ,
  * and since it has been created by the object constructor function ,it's prototype it's onna be Object.prototype.
  * it's the same logic as with the jonas object .
  * since jonas has bee build by Person , Person.prototype is the prototype of jonas.
  * this entire series of links between the object , is what is called the prototype chain .
  * Object.prototype is usually the top of prototype chain , means that it's prototype is NULL
  * so it's __proto__ property will simply points to NULL, which then marks the end of the prototype chain .
  * so in a ceratin way the protoype chain is very similar to the scope chain  but with prototypes
  * in  a scope chain whenever jabvascript can't find  a certain variable  in a ceratins scope
  * it looks up into the next scope in the scope chain and try to find the variable there .
  * in the other hand in the prototype chain whenever javascript can't find a certain property or method
  * in a certain object  , it's gonna look up into the next prototype in the prototype chain and see 
  * if it can find it there .
  * let's see another example of method :
  * jonas.hasOwnProperty('name')
  * we call the hasOwnProperty() method on jonas object.
  * js is gonna start by trying to find the called method on the object itself 
  * but of course it can't find the hasOwnProperty method on jonas ,so according
  * on how prototype chaiin works , it will look to it's prototype whcih is Person.prototype
  * so we didn't defined any hasOwnProperty method there , so js it's gonna not find it there
  * so therefore it will move on  and look to Object.prototype , the Object.protype has the method there
  * javascript can then takes this method and run it on jonas object as if hasOwnProperty() is defined directly on jonas
  * remember that method has not being copied to the jonas object , instead it simply
  * inherited the method from the Object.prototype throught the prototype chain .
  * 
  * 
  */