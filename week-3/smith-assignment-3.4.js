/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 5 June 2018
; Modified By: Matthew Smith
; Description: This program is an exercise
; for practicing with loops.
;===========================================
*/ 

var header = require('../header.js'); 

// start program

/*
    Expected output:
    FirstName LastName
    Assignment 3.4
    Today's Date
    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!
    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!
*/ 

// Creates header
console.log(header.display("Matthew", "Smith", "Assignment 3.4"));

// test variable
var test = 7;



// for loop
console.log("-- Displaying for loop --");

for(let i = 0; i < 10; i++) {
    // Creates new random number every iteration
    var randNumber = randomNumber();

    // Compares random number to test case
    if(randNumber === test) {
        logMatch(randNumber, test);
    }
    else {
        logMismatch(randNumber, test);
    }
}

// while loop
console.log("\n-- Displaying while loop --"); 

// Declaration of iterative variable
var j = 0;

while(j < 10) {
    // Creates new random number every iteration
    var randNumber = randomNumber();

    // Compares random number to test case
    if(randNumber === test) {
        logMatch(randNumber, test);
    }
    else {
        logMismatch(randNumber, test);
    }
    j++;
}

// Reused functions from exercise-3.2.js

function match(argument1, argument2) {
    // Returns a boolean representing whether or not argument1 equals argument2.
    return argument1 === argument2;
} 

function logMismatch(argument1, argument2) {
    // Logs that the two arguments do not match in the console.
    console.log(argument1 + " and " + argument2 + " do not match!");
}

function logMatch(argument1, argument2) {
    // Logs that the two arguments match in the console.
    console.log(argument1 + " and " + argument2 + " do match!");
}

// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}