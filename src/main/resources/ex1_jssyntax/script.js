'use strict';

// singleline comments
/* multiline comments */

console.log("__ TOPIC: DECLARING VARIABLES __");

var text1 = "abc"; // same as in Java: string text1 = "abc";
var text2 = 'abc';
console.log("Concatenating strings: " + text1 + "-" + text2);

var aggregate = 5 + text1 + "-" + text2 + "-something-else";
var aggregate2 = 5 + 1 + "-" + text2 + "-something-else";
console.log(aggregate);
console.log(aggregate2);


var number1 = 5;
var number2 = 5.012;
var number3 = 5000000000000.012;

console.log("Adding numbers: " + number1 + " + " + number2 + " = " + number1 + number2); // this will not work
console.log("Adding numbers: " + number1 + " + " + number2 + " = " + (number1 + number2));
console.log(number3 + 0.1);

var large = 999999999999999;   // large will be 999999999999999
var larger = 9999999999999999;  // larger will be 10000000000000000



console.log("");
console.log("__ TOPIC: BASIC OPERATORS __");

var boolean1 = true;
var boolean2 = false;

// +, -, /, *, %
console.log(">>" + 5 % 2); // prints 1, we see that % has higher precedence than +
console.log(">>" + (5 % 2)); // prints 1
console.log(">>" + 5 / 2); // prints 2.5, we see that % has higher precedence than +
console.log(">>" + (5 / 2)); // prints 2.5
console.log(">>" + (boolean1 && boolean2)); // prints what?

// some more advanced ways to declaring variables
// var x = 5, y = 6, z = 7;
//
// var a = 10,
//     b = 30,
//     c = 90;

// Keyword let
// Introduced in ES2015 (aka ES6), the variable type let shares a lot of similarities with var but unlike var has scope constraints.
// let is constrained to whichever scope it is declared in. Its declaration and assignment are similar to var
// ATTENTION: uncomment to see error

// let x = 20;
// let x = 50; // SyntaxError: identifier "x" has already been declared.
// compare with:
// var x = 20;
// var x = 50; // SyntaxError: identifier "x" has already been declared --- NOT THERE


// Most convincing let vs. var explanation
var x = 999;
if (10 > 5) {
    // let x = 10; // will not be able to use outside of if
    var x = 10; // will be able reach outside of if
}

console.log(x);


// Keyword const
// Also introduced in ES2015, const, is a variable type
// assigned to data whose value cannot and will not be changed throughout the script.
// ATTENTION: uncomment to see error
// const name = 'chris';
// name = 'john'; // Uncaught TypeError: Assignment to constant variable.


// Question: is const global or like let - locally scoped?
// if (10 > 5) {
//     const constx = 10;
// }
//
// console.log(constx);



// == VS ===
// In JavaScript there are two comparison operators.
// ... If we want to compare values we use ==.
// ... If we want to compare values and types we use ===.
// ... In general - it is safer to use === always
console.log("5 == 5 : " + (5 == 5)); // prints true
console.log("\"5\" == 5 : " + ("5" == 5)); // prints true
console.log("\"5\" === 5 : " + ("5" === 5)); // prints false (types differ)


console.log("");
console.log("___ TOPIC: Conditionals ___");


var first = 25;
var second = 20;

if (first > second) {
    console.log("First is bigger than second!");
} else {
    console.log("First is smaller than second!");
}

if (first > second)
    console.log("First is bigger than second!");
else
    console.log("First is smaller than second!");

// Ternary operator
(first > second)
    ? console.log("First is bigger than second!")
    : console.log("First is smaller than second!");

console.log((first > second)
    ? "First is bigger than second!"
    : "First is smaller than second!")


console.log("");
console.log("___ TOPIC: Loops ___");
for (var i = 0; i < 3; i++) {
    console.log("Inside for() loop, i is now:" + i);
}

var i = 0;
while (i < 3) {
    console.log("Inside while() loop, i is now:" + i);
    i++;
}


console.log("");
console.log("___ TOPIC: Arrays ___");

var myAwesomeArray = [1, 4, 7];

console.log(myAwesomeArray)
console.log(myAwesomeArray[2]); // prints 7, since arrays are 0 based
console.log(myAwesomeArray.length); // prints 3
console.log(myAwesomeArray[myAwesomeArray.length - 1]); // gets the last element


console.log("");
console.log("___ TOPIC: Array push() and pop() ___");
myAwesomeArray.push(155); // arrays are dynamic so we can extend them with additional elements
console.log(myAwesomeArray.length); // prints 4
console.log(myAwesomeArray[myAwesomeArray.length - 1]); // gets the last element


console.log(myAwesomeArray);
console.log(myAwesomeArray.pop());
console.log(myAwesomeArray);
console.log(myAwesomeArray.pop());
console.log(myAwesomeArray);
console.log(myAwesomeArray.pop());
console.log(myAwesomeArray);
console.log(myAwesomeArray.pop());
console.log(myAwesomeArray);
console.log(myAwesomeArray.pop());
console.log(myAwesomeArray);

console.log("Type of array : "+ typeof myAwesomeArray);

console.log({ name: "Jonas", age: 15 });
console.log(typeof { name: "Jonas", age: 15 });


var testArray = [
    { name: "Jonas1", age: 15 },
    { name: "Jonas2", age: 15 },
    { name: "Jonas3", age: 15 }
];

console.log(testArray);


// arrays have a lot of functionality associated, see: https://www.w3schools.com/jsref/jsref_obj_array.asp
// ... like map, filter, reduce (what JAVA's streams provide as well)
var personel = [
    {
        id: 51,
        name: "Joana",
        salary: 450,
        bonus: true,
        gender: "female"
    },
    {
        id: 2,
        name: "Jonas",
        salary: 600,
        bonus: false,
        gender: "male"
    },
    {
        id: 432,
        name: "Marta",
        salary: 1005,
        bonus: true,
        gender: "female"
    },
    {
        id: 44,
        name: "Petras",
        salary: 450,
        bonus: true,
        gender: "male"
    }
];


console.log(personel);



// Can we have an array of mixed datatypes?
var mixedArray = ["A", 1, "Boo", true, ["Array", "Array"], {x: "y"}];

for (var i = 0; i < mixedArray.length; i++) {
    console.log("Type of " + mixedArray[i] + " = " + (typeof mixedArray[i]));
}

// Anonymous functions
mixedArray.forEach( function( element, index ) {
    console.log("Element with Index: " + index + " has a value " + element);
});

// Arrow function (element, index) => {}
mixedArray.forEach((e, i) => {
    console.log("Element with Index: " + i + " has a value " + e)
});


var names = ["Jonas", "Zita", "Mindaugas", "Petras"];
names.sort();
console.log(names);
names.reverse();
console.log(names);



// inserting / removing at random position with .splice()
// ... the function has the effect to deleting the members specified
// ... but it returns them after the deletion
console.log("");
console.log("___ TOPIC: Arrays.splice() ___");
mixedArray.splice(1, 5);
for (var i = 0; i < mixedArray.length; i++) {
    console.log("Type of " + mixedArray[i] + " = " + (typeof mixedArray[i]));
}

let arrayToSplice = [0, 1, 2, 3, 4, 5, 6];
console.log(arrayToSplice);
console.log(arrayToSplice.splice(2, 3));
console.log(arrayToSplice);


console.log("___ TOPIC: Arrays.slice() ___");
const arrayToSlice = [1, 2, 3, 4, 5, 6];
console.log(arrayToSlice);
console.log(arrayToSlice.slice(2, 3));
console.log(arrayToSlice);


console.log("___ TOPIC: Array.filter() ___");
// myArr.filter(func(){});
var males = personel.filter(function (person) {
    if (person.gender === "male")
        return person;
});

console.log("Male personnel:")
console.log(males);



// Let's combine them together w/ filter, map reduce
// ... by calculating the average salary for
// ... males after the bonus is applied
var avgMaleSalary = personel
    .filter(function (person) {
        if (person.gender === "male")
            return person;
    }).map(function (male) {
        if (male.bonus === true)
            male.salary += 105;
        return male.salary;
        // reduce(function(total, amount, index, array){}, );
    }).reduce(function (sum, salary, i, male) {
        if (i === male.length - 1) {
            sum += salary;
            return sum / male.length;
        }
        return sum += salary;
    }, 0); // avg reduction

// TODO ::
// var avgMaleSalary = personel
//     .filter(function (person) {
//         if (person.gender === "male")
//             return person;
//     }).map(function (male) {
//         return male.salary;
//     }).reduce(function (sum, salary, i, male) {
//         if (i === male.length - 1) {
//             sum += salary;
//             return sum / male.length;
//         }
//         return sum += salary;
//     }, 0); // avg reduction

console.log("Average male salary:  " + avgMaleSalary);

console.log("Filter : " + [1, 2].filter((n) => !(n % 2)));
console.log("Map : " + [1, 2].map((n) => n + 1));
console.log("Reduce : " + [1, 2, 10].reduce((prev, cur) => prev += cur)); // avg sum



console.log("");
console.log("___ TOPIC: ES6 Array destructuring ___");
var introduction = ["Hello", "I", "am", "Sarah"];
var [greeting, pronoun, third] = introduction;

console.log(greeting); // "Hello"
console.log(pronoun); // "I"
console.log(third); // "am"

console.log("");
console.log("___ TOPIC: ES6 Array spead ___");
const myArray = [`🤪`, `🐻`, `🎌`]
const yourArray = [`🙂`, `🤗`, `🤩`]
const ourArray = [...myArray, ...yourArray]
console.log(...ourArray);
console.log(ourArray);

// ... combining spread and destructuring
let [ax, bx, ...rest] = [10, 20, 30, 40, 50];
// let [ax, bx, rest] = [10, 20, 30, 40, 50]; // compare this
// [ax, ...bx, rest]; // SyntaxError: Rest element must be last element
console.log(ax);
console.log(bx);
console.log(rest);


// // array shift - removing the first item from the array and then returning it
// const array = [1, 2, 3, 4];
// let foo = array.shift();
// console.log(array);
// console.log(foo);


// // unshift - Adds an element at the beginning of an array
// const array = [1, 2, 3, 4];
// array.unshift(0);
// console.log(array);


// // join - combining subsequent elements into one text
// const array = [1, 2, 3, 4];
// let foo = array.join(" >> ");
// console.log(foo);


// // reverse - reversal of elements in array
// const array = [1, 2, 3, 4];
// array.reverse();
// console.log(array);


// // sort - sorting array elements
// const array = [11, 2, 13, 4];
// array.sort();
// console.log(array);


// // concat – merges the arrays and returns the new combined array
// const array = [1, 5, 3, 4];
// const array2 = [2, 6, 7, 8];
// let foo = array.concat(array2);
// console.log(foo);


// // includes – checks whether the array contains the element
// const array = [1, 2, 3, 4];
// let foo = array.includes(3);
// console.log(foo);


console.log("");
console.log("___ TOPIC: Functions ___");

// inbuilt functions:
// https://www.w3schools.com/jsref/jsref_obj_global.asp

// function declaration (named functions)
function myFunction(firstParam, secondParam) {
    return firstParam + secondParam;
}

// function invocation - calling the function
console.log(myFunction(1, 2))
console.log(myFunction("a", "b"))

// TODO :: varargs --> https://stackoverflow.com/questions/1959040/is-it-possible-to-send-a-variable-number-of-arguments-to-a-javascript-function

// Default parameters to functions
function greatAPerson(name = "Mindaugas") {
    console.log("Hello " + name + "!");
}

greatAPerson("Bart");
// greatAPerson();

// self executing anonymous funciton
(function(a, b) {
    return "Self executing: " + a + b;
})(10,20);

((a, b) => { console.log(a / b) })(10, 15)

// Arrow functions
// ES5, function expression
var multiplyES5 = function (x, y) {
    return x * y;
};

// ES6 arrow functions
const multiplyES6 = (x, y) => {
    return x * y
};

console.log(multiplyES6(4, 2));



console.log("");
console.log("___ TOPIC: Objects ___");
// Object literal - one way to create objects
var cat = {
    weight: 12.2,
    name: "Fluffy",
    fur: false
};

// Two ways to access the properties
console.log(cat.weight);
console.log(cat.name);
console.log(cat.fur);

// Another way to access properties. This
// way is useful because you can use valid strings
// that are NOT VALID variable names to give to your objects
// maybe you received them from user input or some file
console.log(cat["weight"]);
console.log(cat["name"]);
console.log(cat["fur"]);


// Using constructor functions to create objects - the second way
function Cat(name, color) {
    this.name = name;
    this.color = color
}

var myCat = new Cat("Fluffy", "White");
console.log("constructor functions -->" + myCat.name);



// Ecmascript6 Classes - the 4th way
class Dog {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    speak() {
        console.log('Whoof!')
    }
}

var dog = new Dog('Floyd', 'Black');
console.log(dog);
console.log(JSON.stringify(dog))
dog.speak();


console.log("");
console.log("___ TOPIC: Inheritance ___");

// we can acomplish the same using classes
class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt'
    }
    speak() {
        return this.voice
    }
}

class Pooper extends Animal {
    constructor(name, color) {
        super('Woof Woof!');
        this.name = name;
        this.color = color;
    }
}

var riky = new Pooper('riky')
console.log(riky.speak())



console.log("");
console.log("___ TOPIC: Algorithms ___");
// because we have functions we can write encapsulated, reusable algorithms
// for example: sort function that would sort objects returned from a backend
// and render them on screen once they are sorted.

var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(items) {
    var length = items.length;
    var swapped = false;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (items[j] > items[j + 1]) {
                var tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
}

console.log("Before:\t" + a);
bubbleSort(a);
console.log("After:\t" + a);


console.log("");
console.log("___ TOPIC: Design patterns ___");

var Singleton = (function () {
    var instance;
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();


console.log(instance1);
console.log(instance2);

// Singleton.createInstance is not a function, we can't call it directly
//var instance2 = Singleton.createInstance();

console.log("Same instance? " + (instance1 === instance2));



console.log("");
console.log("___ EXERCISE: Design patterns ___");
// ... create a class Person { age , name }
// ... create an array of objects of class Person
// ... sort that array by age

// ... create a class Person { age , name }
class Person {
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
}

// ... create an array of objects of class Person
let people = [
    new Person(24, "Jonas"),
    new Person(34, "Markas"),
    new Person(18, "Benas")
];
console.log("Unsorted : " + JSON.stringify(people));

// ... sort that array by age
// ... comparator function -
// ... - return negative number - when the order is correct (first smaller than second)
// ... - return 0               - when they are equal
// ... - return positive number - when the order needs to change (first bigger than second)
// people.sort(function(a, b) {return b.age - a.age });

// console.log("Sorted : " + JSON.stringify(people));
console.log("Reversed : " + JSON.stringify(people.reverse()));
