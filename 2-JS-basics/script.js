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
* The Ternary(conditional) Operator and switch statements
allows if/else statements in one line
*/
/*
var firstName = 'John';
var age = 22;

//ternary means 3 parts: condition,if block, else block
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//one line conditional is great. the alternative is below
/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);*/
/*
// Switch Statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':    
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs websites for a company');
        break;
    default:
        console.log(firstName + ' does something else');
}

// to make switch statement work with ranges of > or < statements you can set switch (true) {...}

*/

/*******************************
* Truthy and Falsy values and equality operators
*/
/*

// falsy values: undefined, null, 0, '',NaN
// truthy values: NOT falsy values

// notice that 0 is a falsy value so we must be careful when our variables are zero

var height;
height=23;

if (height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable has NOT been defined');
}

// == does type coercion
if (height == '23') {
    console.log('The == operator does type coercion!');
}

*/

/*******************************
* Coding Challenge #2
*/
/*

var johnScore, markScore;
johnScore = (89 + 120 + 103)/3;
markScore = (116 + 94 + 123)/3;
console.log(johnScore, markScore);


johnScore > markScore ? console.log('john wins with ' + johnScore + ' points!') : console.log('mark wins with ' + markScore + ' points!');

if (johnScore > markScore) {
    console.log('john wins with ' + johnScore + ' points!');
} else if (markScore > johnScore) {
    console.log('mark wins with ' + markScore + ' points!');
} else {
    console.log('The score is tied! there is a draw at ' + johnScore + ' points');
}

var maryScore = (97 + 134 + 105)/3;

if (johnScore > markScore && johnScore > maryScore) {
    console.log('john wins with ' + johnScore + ' points!');
} else if (markScore > johnScore && markScore > maryScore) {
    console.log('mark wins with ' + markScore + ' points!');
} else if (maryScore > johnScore && maryScore > markScore) {
    console.log('mary wins with ' + maryScore + ' points!');
} else {
    console.log('The score is tied! there is a draw at ' + johnScore + ' points');
}


switch (true) {
    case johnScore > markScore && johnScore > maryScore:  
        console.log('john wins');
        break;
    case markScore > johnScore && markScore > maryScore:
        console.log('mark wins');
        break;
    case maryScore > johnScore && maryScore > markScore:
        console.log('mary wins');
        break;
    default:
        console.log('it is a tie!');
}
*/

/*******************************
* FUNCTIONS
*/
/*
function calculateAge(birthYear) {
    return 2018-birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn,ageMike,ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
    
}

yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1969,'Mike');
yearsUntilRetirement(1945,'Jane');
*/

/*******************************
* FUNCTION Statements and Expressions
*/
/*
//Function declation
//function whatDoYouDo(job,firstName) {}

//Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids to code';
        case 'driver':
            return firstName + ' drives a schoolbus';
        case 'designer':
            return firstName + ' designs websites';
        default:
            return firstName + ' does something else';
    }
}

// Note that return will immediatedly return the value so BREAK is not needed in the switch statement

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','mark'));
console.log(whatDoYouDo('retired','Jane'));


//expressions always produce a value
//statements perform actions and don't produce immediate results (like if else statements)
*/

/*******************************
* Arrays
*/
/*
//initialize new array
var names = ['John', 'mark', 'jane'];
var years = new Array(1990,1969,1948);

console.log(names);
console.log(names.length);
console.log(names[2]);

//mutate array data
names[1] = 'Ben';
names[names.length] = 'mary';
names[5] = 'gary';
console.log(names);

//different data types
var john = ['john','smith',1990,'teacher',false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);


console.log(john.indexOf(1990));

console.log(john.indexOf('designer'));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);

//'designer' is not in the array so it returns -1 because it is NOT in the array

*/

/*******************************
* Coding Challenge 3
*/
/*

var tip = function(subtotal) {
    if (subtotal > 200) {
        return subtotal * 0.1;
    } else if (subtotal > 50) {
        return subtotal * 0.15;
    } else {
        return subtotal * 0.2;
    }
};


console.log(tip(250));

var bills = [124,48,268];
var tips = [tip(bills[0]),
           tip(bills[1]),
           tip(bills[2])];

console.log(tips);

var totals = [bills[0] + tips[0],
             bills[1] + tips[1],
             bills[2] + tips[2]];

console.log(totals);
*/
/*******************************
* Objects and properties
*/
/*
//unlike in arrays, order doesn't really matter in objects. objects deal with key value pairs

//object literal
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: '1990',
    family: ['jane','mark','bob','emily'],
    job: 'teacher',
    isMarried: false
};
//notice you can even put an array inside the object (ex family)

console.log(john);
//use dot notation to access values within john
console.log(john.firstName);
console.log(john.family[2]);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

//mutate the data
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
var jane = new Object();
    jane.firstName = 'Jane',
    jane.lastName = 'smith',
    jane.birthYear = '1969';

console.log(jane);
*/

/*******************************
* Objects and methods
*/
//we can also attach functions to objects
/*
//object literal
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: '1992',
    family: ['jane','mark','bob','emily'],
    job: 'teacher',
    isMarried: false,
    //calcAge: function(birthYear) {
    calcAge: function() {
        //return 2018 - birthYear;
        //return 2018 - this.birthYear;
        this.age = 2018 - this.birthYear;
    }
};

//console.log(john.calcAge(1990));
console.log(john.calcAge());

//An object has a special THIS keyword that points to itself. using THIS.xxxx you can call the property in the CURRENT object ie this.birthYear means john.birthYear

//set the property based on the result
//john.age = john.calcAge();
console.log(john);
*/
/*******************************
* Coding Challenge 4
*/
/*
var john = {
    firstName: 'john',
    lastName: 'baptist',
    mass: 100,
    height: 1.80,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

var mark = {
    firstName: 'mark',
    lastName: 'clark',
    mass: 66,
    height: 1.73,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

//john.calcBMI();
//mark.calcBMI();

//note that you have to call the function for the assigned value within the function to be stored as a property.
console.log(john, mark);

//you can calculate the BMI and use it in one go by calling the calcBMI func inside of the if statement. this way you don't have to call the calcBMI beforehand in order to access .BMI. Now the BMI property is accessible already.
if (john.calcBMI() > mark.calcBMI()) {
//if (john.BMI > mark.BMI) {
    console.log(john.firstName + ' has a higher BMI of ' + john.BMI);
} else if (mark.BMI > john.BMI) {
    console.log(mark.firstName + ' has a higher BMI of ' + mark.BMI);
} else {
    console.log(mark.firstName + ' and ' + john.firstName + ' have the same BMI of ' + john.BMI);
}
*/

/*******************************
* Loops and iteration
*/

// for loops have 3 parts: initial count variable, condition, counter
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < 10; i+=2) {
    console.log(i);
}


var john = ['john', 'smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/

//continue and break statements

//continue skips the elements that don't match the condition
/*
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    //note that you can write the simple if statement without putting the action in curly braces
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

//break permanently exits the string once a mismatch is found
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    //note that you can write the simple if statement without putting the action in curly braces
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//looping backwards
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
    //note that you can write the simple if statement without putting the action in curly braces
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
*/

/*******************************
* CODING CHALLENGE 5
*/
/*
var john = {
    name: 'john smith',
    subTotal: [124,48,268,180,42],
    //calcAge: function(birthYear) {
    calcTip: function() {
        this.tip = [];
        this.total = [];
        for (var i=0;i<this.subTotal.length;i++) {
            var percentage;
            var bill = this.subTotal[i];
            
            if (bill < 50){
                percentage = 0.2;
            } else if (bill >= 100 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            this.tip[i] = bill * percentage;
            this.total[i] = bill + this.tip[i];
        }
    }
};
john.calcTip();
console.log(john);

var mark = {
    name: 'mark miller',
    subTotal: [77,475,110,45],
    //calcAge: function(birthYear) {
    calcTip: function() {
        this.tip = [];
        this.total = [];
        for (var i=0;i<this.subTotal.length;i++) {
            var percentage;
            var bill = this.subTotal[i];
            
            if (bill < 100){
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
            this.tip[i] = bill * percentage;
            this.total[i] = bill + this.tip[i];
        }
    }
};
mark.calcTip();
console.log(mark);

function calcAverage(tip) {
    var sum =0;
    for (var i=0;i < tip.length;i++) {
        sum = sum + tip[i];
    }
    return sum / tip.length;
}

mark.average = calcAverage(mark.tip);
console.log(john,mark);
*/

