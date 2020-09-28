/*
// Object literal
var john ={
    firstName :'John',
    lastName : 'Wick',
    birthYear : 2000,
    job : 'killing',
    isMarried : true,
    family :['pintu','bob','smith']
}
console.log(john);
// to access a perticular
console.log(john.lastName);
console.log(john['family']);

// to mutate 
john.isMarried =false;
console.log(john);

// to create a new object
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'stark';
jane.birthYear = 1995;

console.log(jane);

*/
// object and its method
/*
var john ={
    firstName :'John',
    lastName : 'Wick',
    birthYear : 2000,
    job : 'killing',
    isMarried : true,
    family :['pintu','bob','smith'],
    calcAge : function(birthYear){
        this.age =  2020 - this.birthYear;
    }
}
john.calcAge();
console.log(john)

*/


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(john.calcBMI(),mark.calcBMI());
console.log(john.bmi);
console.log(mark.bmi);



if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}






