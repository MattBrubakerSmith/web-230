/*
============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 11 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates how
; to define and access arrays.
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:
 FirstName LastName
 Exercise 4.2
 Today's Date
 Apple
 Orange
 Banana
 Mango
 Pear
*/

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 4.2"));

// start program
var fruit = ["Pomegranate", "Avocado", "Starfruit", "Kiwi", "Habanero Pepper"];


// function
function getFruit(fruitArray) {
    return fruitArray.join("\n");
}


// Output from the getFruit() function
console.log(getFruit(fruit));




// end program