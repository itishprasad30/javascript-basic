var year, yearJohn,yearMark;
var now = 2018
yearJohn = now - 28;
yearMark = now - 32;
// math Operator

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// logiacal Operator
var ageJohn = 28;
var ageMark = 30;
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);//always boolean value

// Type Of Operator

console.log(typeof ageJohn);
console.log(typeof 'pintu');
var x;
console.log(typeof x);
var y = null;
console.log(y);

// Operator precendence

var now = 2020;
var yearPintu = 2000;
var fullAge = 20;

var isFullAge = now - yearPintu >= fullAge;
console.log(isFullAge);

var a = 2
var b = 3
var av =( a+b )/ 2;
console.log(av);

var x,y
x = y = (3 + 5) * 4 - 6 //8*4-6//32-6=26
console.log(x,y);

a = 5
console.log(a);
a +=1
console.log(a);
a *=6
console.log(a);
a --
console.log(a);



/* CODING CHALLENGE 1
*/


/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/


// Answer in given below

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark , BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);








  















