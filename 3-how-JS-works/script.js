///////////////////////////////////////
// Lecture: Hoisting
/*
//function declarations
calculateAge(1969);
function calculateAge(year) {
    console.log(2016 - year);
}
//calculateAge(1990);



//function expressions
//retirement(1979);
var retirement = function(year) {
    console.log(65 - (2016-year));
};
//retirement(1985);


//Variables

console.log(age);
var age = 23;


function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d);
    console.log(a + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calcAge(1985);

function calcAge(year) {
    console.log(2016-year);
    console.log(this);
}
*/
var john = {
    name: 'john',
    yearofbirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2016 - this.yearofbirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calcAge();

var mike = {
    name: 'mike',
    yearofbirth: 1984
};

mike.calcAge = john.calcAge;

mike.calcAge();