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

