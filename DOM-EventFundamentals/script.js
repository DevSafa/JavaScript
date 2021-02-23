'use strict';

//1-define the secret secretNumber, because we want that secret secretNumber to be defined once ,
//we should define it outside.

//if we defined the secret secretNumber inside this handler function , then on each click 
//we would get a new secret secretNumber , then the game would make no sense at all 
//2-each time we guess a wrong number our score should decrease.
//3-if we reach 0 in the score we should lose the game


//define a secretNumber between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//we can store the score basically in the DOM , and to do that we can always just read the value from DOM 
//decrease it , and write it back to the DOM .but we will not have that value in our code

//creating a variable for the score for not just saving our data in DOM , but save it also to the code
//it's always good to keep a variable which actually holds the data in our code ,
// and not just rely onn the DOM to hold the data.
//score is a state variable because the score is part of what we called application state ,
//which is basically all the data that is relevant to the application .
let score = 20;



// display the secretNumber in web page 
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess ,typeof  guess);

    if (!guess){
        document.querySelector('.message').textContent = 'No number!';
    }else if (guess === secretNumber ){ //compare the secret secretNumber to the user guess
        // the correct Number message should be displayed
        document.querySelector('.message').textContent = 'Correct Number!';  
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too high!';  
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }else if (guess < secretNumber){
        if (score > 1){
            //decrease the score by 1 
            document.querySelector('.message').textContent = 'Too Low!';  
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        
    }
  

});



