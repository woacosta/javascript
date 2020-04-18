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


/*******************************
* Operator Precedence
*/

