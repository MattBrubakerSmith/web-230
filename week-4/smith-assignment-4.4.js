/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 11 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use predicates.
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:
 FirstName LastName
 Assignment 4.4
 Today's Date
 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada
 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada
 -- SELECTED VALUE --
 Iowa
 */

 // Creates header
console.log(header.display("Matthew", "Smith", "Assignment 4.4"));

// start program
var array = ["Florida", "Virginia", "New York", "Illinois", "Colorado"];

// function
function getValue(x, val) {
    return x === val;
}

// Output
// Logging original array
console.log("-- ORIGINAL ARRAY --\n" + array.join("\n"));

// Sorting and logging alphabetically sorted array
var sortedArray = array.sort();
console.log("-- SORTED ARRAY --\n" + sortedArray.join("\n"));

// Filtering and logging filtered array value
var filteredArray = array.filter(function(x) {return getValue(x, "Colorado")});
console.log("-- SELECTED VALUE --\n" + filteredArray.join("\n"));

// end program