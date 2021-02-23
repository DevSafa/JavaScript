'use strict';

//start developing application step by step

//select the button element itself
//document.querySelector('.check'); => will return an element

//call the addEventListenner method to that element
//we need to pass the type of the event to the listenner ,
//in this case is just a simple click 
//then we need to tell the eventListenner what to do ; basically we need to specify 
//the reaction to the click event.
//we do that by definning a function , and that function  exactly contain the code 
//that should executed whenever this click event happens in the check button.
//addEventListenner is a special function , because as a second argument it accepts a function value.

//javascript engine will call this function as  soon as the event handled
document.querySelector('.check').addEventListener('click' , function(){
    //console.log(document.querySelector('.guess').value);
        //let's a value to a variable
    //const guess = document.querySelector('.guess').value;
        //console.log(guess);

    //usually when you get something from the user interface, from an input field , it usually always 
    //is a string
        //console.log(typeof guess);
    //if we want to compare numbers with numbers , we need first to convert the string to a number
    const guess = Number(document.querySelector('.guess').value);

    console.log(typeof guess , guess);

    // implemet the game logic in case there is no guess
    //check if there is a value 

    //0 is  a falsy value , we use ! to convert guess from false to true
    if (!guess){
        document.querySelector('.message').textContent = 'No number!';
    }
});



