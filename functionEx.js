/* Function Example
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var john = calculateAge(2000)
console.log('the age of john is '+ john);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement>0){
        console.log(firstName + " retires in "+ retirement +" years.");
        
    }  else{
        console.log(firstName + ' already retired.');
        
    }
   

}
yearsUntilRetirement(2000,'pintu');
*/


/*****************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}
// Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

/*
// coding chalenage
//  CODING CHALLENGE 3


/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);

// this is my way in codding
function tipcal(money){
    
    var percent;
    switch(money){
        case money < 50:
            percent = .2
            break;
        case money >=50 && money <=200:
            percent = .15
            break;
        default:
            percent = .1

    }
    return percent * money;


}
// console.log(tipcal(300));
var money = [124, 48, 268];
var total = [tipcal(money[0]),
            tipcal(money[1]),
            tipcal(money[2])]
var finalValues = [money[0] + total[0],
            money[1] + total[1],
            money[2] + total[2]];

console.log(total, finalValues);

