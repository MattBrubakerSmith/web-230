/*
============================================
; Title: Exercise 5.2
; Author: Professor Krasso
; Date: 20 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to iterate over arrays with the 
; built-in forEach() method.
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:
 FirstName LastName
 Exercise 5.2
 Today's Date
 Oysters
 Shrimp
 Steak
 Tacos
 Sushi
 */

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 5.2"));

// start program
var favoriteFoods = ["Haggis", "Lutefisk", "MREs", "Rocky Mountain Oysters", "Necco Wafers"];

favoriteFoods.forEach(function(val, key) {
    console.log(val);
});

// end program