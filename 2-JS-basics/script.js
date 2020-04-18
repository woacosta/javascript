/*******************************
* Variables and Data Types
*/

/*

//this will print to the console log
//console.log('Hello world, again!')

var firstName = 'John';
console.log(firstName);

var lastName = 'smith';
var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);

// best practice to give meaningful names and to use camelCase
//vars can't start with numbers or symbols except $ or _
//can't use reserved js keywords'

var _3years = 3

//undefined datatype
var job;
console.log(job);

// now we define the previously undefined
job = 'teacher';
console.log(job);

*/

/*******************************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

// age is automatically converted to a string ie type coercion

// declare many variables in one line
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// Variable mutation - can change var and types on the fly
age = 'twenty eight';
job = 'driver';


alert(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*******************************
* Basic Operators
*/

/*
var year, yearJohn, yearMark;
year = 2020;
var ageJohn = 28;
var ageMark = 33;

// Math operators
var yearJohn = year - ageJohn;
var yearMark = year - ageMark;

console.log(yearJohn);
console.log(yearMark);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// logical operator
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof x);
console.log(typeof 'Mark is older than John');

*/
/*******************************
* Operator Precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// take a look at the operator precedence table
// subtraction has higher priority than >==
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
// using parentheses allows this to work correctly
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// some operators are evaluated right to left. = is one of them which is why this case works and x is NOT undefined

// more operators

x *= 2;
console.log(x);
x += 10;
console.log(x);

//these 3 are all the same
x += 1;
x++;
x--;
console.log(x);


BMI = mass / height^2 = mass / (height * height)

*/

/*******************************
* CODING CHALLENGE 1
*/

/*
var massJohn, heightJohn, massMark, heightMark;

massJohn = 50;
heightJohn = 1.7;
massMark = 66;
heightMark = 1.9;

var JohnBMI, MarkBMI, biggerMark;
JohnBMI = massJohn / (heightJohn * heightJohn);
MarkBMI = massMark / (heightJohn * heightMark);
console.log(JohnBMI, MarkBMI);

biggerMark = MarkBMI > JohnBMI;
console.log(biggerMark);

// note the escape method of using backslash on the apostrophes
console.log('is mark\'s BMI higher than john\'s?' + biggerMark);

*/

/*******************************
* If / else statements
*/
/*
var firstName = 'john';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will marry soon :)');
}

var isMarried = true;
// note that isMarried is already a boolean value so you don't need to specify in the if statement
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will marry soon :)');
}


var massJohn, heightJohn, massMark, heightMark;

massJohn = 50;
heightJohn = 1.7;
massMark = 66;
heightMark = 1.9;

var JohnBMI, MarkBMI, biggerMark;
JohnBMI = massJohn / (heightJohn * heightJohn);
MarkBMI = massMark / (heightJohn * heightMark);
console.log(JohnBMI, MarkBMI);

biggerMark = MarkBMI > JohnBMI;
console.log(biggerMark);

if (MarkBMI > JohnBMI) {
    console.log('John\s BMI is smaller than mark\'s');
} else {
    console.log('John\'s BMI is bigger than mark\'s');
}
*/

/*******************************
* Boolean Logic
*/

/*
var firstName = 'john';
var age = 25;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teen');
} else if (age >=20 && age < 30) {
    console.log(firstName + ' is a young man');       
} else {
    console.log(firstName + ' is a man');
}

// note that && and || operators have lower priority than the comparison operators
*/

/*******************************
* The Ternary Operator and switch statements
*/



















