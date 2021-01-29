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
to the rule above .Example ; "Koalas with (30 vs. 13)".
4- Use the 'checkWinner' function to determine the winner for both DATA 1  and DATA 2 .
5- Ignore draws this time.

TEST DATA 1 :Dolphins score 44, 23 and 71 . Koalas score 65,54 and 49
TEST DATA 2 :Dolphins score 85, 54 and 41 . Koalas score 23, 34 and 27.
*/

const calcAverage  = (score1 , score2, score3) =>{
    return (score1 + score2 + score3) / 3;
}
const averageDolphins = calcAverage(44,23,71);
const averageKoalas = calcAverage(65, 54, 49);

// const averageDolphins = calcAverage(85,54,41);
// const averageKoalas = calcAverage(23, 34, 27);

console.log(`Dolphins average = ${averageDolphins}\nKoalas average = ${averageKoalas}`);

console.log('--------------------');

console.log(`Average of both teams = ${(averageDolphins + averageKoalas) / 2}`);

console.log('--------------------');

const checkWinner = (avgDolphins , avgKoalas) =>{
    let winner;
    if (avgDolphins >= (2*avgKoalas))
        return `Dolphins with (${avgDolphins}) vs. ${avgKoalas}`;   
    else if (avgKoalas >= (2 * avgDolphins))
        return `Koalas with (${avgKoalas}) vs. ${avgDolphins}`;  
    return `no winner`;
}

const winner = checkWinner(averageDolphins,averageKoalas);

console.log(`${winner}`);

