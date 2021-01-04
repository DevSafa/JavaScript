////////////
// Coding Challenge #1

/*
    Mark and John are trying to compare their BMI (Body Mass Index),
    which is calculated using the formula :
    BMI = mass / height ** 2 = mass /(height * height).
    (mass in Kg and height in meter).

    1- store Mark's and John's mass and height in variables
    2- Calculate both their BMIs using the formula (you can even implement both versions)
    3- create a boolean variable 'markHeigherBMI' containing information about whether Mark has a 
    heigher BMI than John .

    Test Data 1 : Marks weights 78 kg and is 1.69 m tall .
                John weights 92 Kg and is 1.95 m tall .
    Test Data 2: Marks weights 95 kg and is 1.88 m tall.
                John wights 85 kg and is 1.76 m tall


*/

// console.log("Test Data 1:");
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHeigherBMI = BMIMark > BMIJohn;
// console.log("Mark BMI :"+BMIMark +"\n"+ "John BMI :"+BMIJohn+"\n"+"BMI MARK heigher THAN JOHN :"+markHeigherBMI);


console.log("Test Data 2:");
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHeigherBMI = BMIMark > BMIJohn;
console.log("Mark BMI :"+BMIMark +"\n"+ "John BMI :"+BMIJohn+"\n"+"BMI MARK heigher THAN JOHN :"+markHeigherBMI);

