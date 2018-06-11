/*
============================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 11 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates how
; to filter arrays.
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:
 FirstName LastName
 Exercise 4.3
 Today's Date
 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus
 -- SELECTED VALUE --
 Motorcycle
 -- SELECTED VALUE --
 Bus
 */

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 4.3"));

// start program
var vehicles = ["Monster Truck", "AT-AT", "Chocobo", "Broomstick", "Unicycle"];


// function
function getValue(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return "-- SELECTED VALUE --\n" + val;
        }
    }
}


// Output
console.log ("-- DISPLAYING ARRAY ITEMS --\n" + vehicles.join("\n"));
console.log(getValue(vehicles, "Broomstick"));
console.log(getValue(vehicles, "AT-AT"));

// end program