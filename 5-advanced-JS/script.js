// Function constructor

/*
var john = {
    name: 'john',
    yearOfBirth: 1999,
    job: 'teacher'
};
*/
/*
// Constuctor function - Person object will be a prototype
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //this.calcAge = function() {
        //console.log(2016-this.yearOfBirth);
    //};
}


// instead of making this an object method of Person, we've made it a method of the prototype of person. it can still be inherited.
Person.prototype.calcAge = function() {
        console.log(2016-this.yearOfBirth);
    };
// create an instance of Person
// the new operator makes an empty object so that when Person is called 'this' points to the new empty object and we can pass in the properties that belong to john
var john = new Person('John', 1999, 'teacher');

john.calcAge();

var jane = new Person('Jane', 1969, 'boxer');

var mark = new Person('Mark', 1948, 'retired');

//the Person object inherited the method from its prototype. the john and jane object instances inherited the property from the Person object.
jane.calcAge();
mark.calcAge();
*/
/*
// Object.create - another way to create an object
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

// use Object.create to say john is an instance of personProto
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1969;
john.job = 'teacher';

// can go further by giving an addtional argument with parameters
var jane = Object.create(personProto,
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

//Object.create - builds an object that inherits directly from the one passed in the argument. A function constructor creates a new object that inherits from the constructor's prototype property

*/

// Primatives vs objects
/* for objects, a variable declared in an object doesn't actually hold a copy of the object, it just points to the place in memory where the object is stored. Variables do hold the data they reference.*/
/*
//primatives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
    
//functions
var age =27;
var obj = {
    name: 'jonas',
    city: 'lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'san francisco'
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

//*********Passing functions as arguments***********//
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <=81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

//*********Functions returning functions***********//

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('hello, ' + name + ', what do you do?');
        } 
    }
}

var teacherQ = interviewQuestion('teacher');
teacherQ('John');

interviewQuestion('teacher')('mark');