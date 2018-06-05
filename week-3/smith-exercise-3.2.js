/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 5 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates the
; use of pattern matching functions,
; conditional statements, and error handling.
;===========================================
*/ 

var header = require('../header.js'); 

// start program

/*
    Expected output:
    FirstName LastName
    Exercise 3.2
    Today's Date
    // output from the match() function 
    false
    true 
    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
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

// six (6) test variables 

var test1 = 1;
var test2 = "HI!";
var test3 = [3, 7, 19];
var test4 = test3;
var test5 = {
    property: "value"
};
var test6 = 1.7;

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 3.2"));


// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (match(test1, test2)) {
    logMatch(test1, test2);
} else {
    logMismatch(test1, test2);
}

if (match(test3, test4)) {
    logMatch(test3, test4);
} else {
    logMismatch(test3, test4);
}

if (match(test5, test6)) {
    logMatch(test5, test6);
} else {
    logMismatch(test5, test6);
}

// end program 