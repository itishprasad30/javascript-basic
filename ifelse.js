/*
var firstname = 'pintu'
var civilStatus = 'single'

    if (civilStatus === 'married') {
    console.log(firstname + ' is married !')
    }else{
    console.log(firstname + ' will marry soon');
    }

var isMarried = true;

if (isMarried) {
    console.log(firstname + ' is married !')
    }else{
    console.log(firstname + ' will marry soon');
    }

*/
// boolean logic
/*
var firstName = 'pintu';
var age = prompt('What is pintu\s age?');

if (age <= 13 ){
    console.log(firstName + ' is a boy.');
    
}else if(age >=13 && age <=20){
    console.log(firstName + ' is a teenager.');
    
}else if (age >=20 && age <=30){
    console.log(firstName + ' is a young man..');
    
}else{
    console.log(firstName + 'is a man.');
    
}
*/

//  The Ternary Operator and Switch Statements

/*
var firstName = 'John';
var age = 14;
// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

// Switch statement
/*
var firstName = 'pintu';
var job = 'singer';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


*/

// var firstName = 'pintu';
// var age = prompt('What is pintu\s age?');


// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }
/*
switch (1) {
    case 1:
        console.log('hello');
        // break;
    default:
        console.log("again");
        
}

switch(3){
    case 2:
        console.log('pintu');
        break;
    case 3:
        console.log('ad')
        break;
    
        
}

*/

/*
Truthly and falsy values and equality operators
*/
// Falsy value : undefined, null, 0, ' ', NaN;
// Truthy value : Not falsy values;
/*
var height;
height = 0;


if (height || height === 0) {
    console.log('variable is defined');
}else{
    console.log('variable os Not defined');
}

// Equality Oparater
height = 23;
if (height == '23') {
    console.log('the == operater does type corecion ');
    
}
// 23 == '23' //true
// 23 === 23 true
// 23 === '23' false

*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}

if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}





