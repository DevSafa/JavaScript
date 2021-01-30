'use strict'
///////////////////////
//coding Challenge #1

/*
Back to the two gymnastics teams , The Dolphins and Koalas! there is a new gymnastics
discipline  , which works differently.

Each team competes 3 times , and then the average of 3 scores is calculated 
(so one average score per team).
A team only wins if it has at least Double the average score of the  other team . oTHERWISE ,
NO team wins!

1 - Create an arrow function 'calcAverage' to calculate the average of 3 scores.
2 - Use the function to calculate the average for both teams
3-create a function 'checkWinner' that takes the average score of each team as parameters
('avgDolphins' and 'avgKoalas'), and then logs the winner to the console ,
 together with the victory points , according
to the rule above .Example ; "Koalas win (30 vs. 13)".
4- Use the 'checkWinner' function to determine the winner for both DATA 1  and DATA 2 .
5- Ignore draws this time.

TEST DATA 1 :Dolphins score 44, 23 and 71 . Koalas score 65,54 and 49
TEST DATA 2 :Dolphins score 85, 54 and 41 . Koalas score 23, 34 and 27.

HINT : to calculate average of 3 valuees , add them all  together and devide by 3
HINT : to check if number A is a t least double number B , check for A >= 2 * B . apply this to the team average scores

GOOD LUCK.
*/

const calcAverage  = (a , b, c) => (a+b+c) / 3;

console.log('Test DATA 1'); 
let scoreDolphins = calcAverage(44,23,71); //= use let so that we can reassigned them 
let scoreKoalas = calcAverage(65, 54, 49);

console.log(`Dolphins score = ${scoreDolphins}\nKoalas score = ${scoreKoalas}`);

const checkWinner =function(avgDolphins , avgKoalas){
    let winner;
    if (avgDolphins >= (2 * avgKoalas))
        console.log(`Dolphins wim (${avgDolphins}) vs. ${avgKoalas}`);   
    else if (avgKoalas >= (2 * avgDolphins))
        console.log(`Koalas win (${avgKoalas}) vs. ${avgDolphins}`);  
    else
        console.log('No team wins...');
}

checkWinner(scoreDolphins,scoreKoalas);

//----------------------------------------

console.log('Test DATA 2');
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23, 34, 27);


console.log(`Dolphins score = ${scoreDolphins}\nKoalas score = ${scoreKoalas}`);
checkWinner(scoreDolphins,scoreKoalas);

