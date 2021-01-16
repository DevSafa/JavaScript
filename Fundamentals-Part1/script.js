/////////////
//Coding challenge #3

/*
there are two gymnastics team , Delphins and Koalas. They compare against
each other 3 times . The winner with the highest average score wins the trophy!.

1-calculate the average score for each team using the test data below
2- compare the team's average scores to determine the winner of the competition , 
and print it to the console. Don't forget that there can be a draw , so test for that as well (draw
means they have the same average score).

3-Bonus 1 : Include a requirement for a minimum score of 100. with this rule , 
a team only wins if it has a higher score of at least 100 points . HINT : uSE A LOGICAL 
operator to test for a minimum score  as well as multiple else -if blocks.

4- BONUS 2 : Minimum score also apllies to a draw! so a draw onlyhappens when both teams have 
the same score and both  have a score greater or eual 100 points . Otherwise no teams wins the trophy.

TEST DATA : Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1 ; Dolphins score 97 , 112 and 101. Koalas score 109 , 95 and 123
TEST DATA BONUS 2 ; Dolphins score 97 , 112 and 101. KOALS score 109 , 95 and 106
*/

//calculate the average 
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88+ 91 + 110)/ 3;
// console.log(scoreDolphins , scoreKoalas);

// if (scoreDolphins > scoreKoalas){
//     console.log(`Dolphins wins the trophy (score ${scoreDolphins})`);
// }else if (scoreKoalas > scoreDolphins){
//     console.log(`Koalas wins the trophy (score ${scoreKoalas})`);

// }else if (scoreKoalas === scoreDolphins){ // the only scenario that 's left given the previous conditions, we can just use "else"
//     console.log("Both wins the trophy");
// }

//BONUS 1 + BONUS 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106)/ 3;
console.log(scoreDolphins , scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log(`Dolphins wins the trophy (score ${scoreDolphins})`);
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log(`Koalas wins the trophy (score ${scoreKoalas})`);

}else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 &&  scoreKoalas >= 100 ){
    console.log("Both wins the trophy");
}else{
    console.log("No one wins the trophy.");
}