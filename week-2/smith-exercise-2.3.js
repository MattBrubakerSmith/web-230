/*
============================================
; Title: Assignment 2.3
; Author: Professor Krasso
; Date: 30 May 2018
; Modified By: Matthew Smith
; Description: Simple program experimenting
; with JavaScript function properties.
;===========================================
*/ 

var header = require('../header.js'); 

// start program

/*
    Expected output:
    FirstName LastName
    Exercise 2.3
    Today's Date
    Hello FirstName LastName!
    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...


// function 
function myName() {
    var matthewSmith = "Matthew Smith";
    return matthewSmith;
}

var name = myName();

// output 
console.log(header.display(name.split(" ")[0], name.split(" ")[1], "Exercise 2.3"), "\nHello " + name.split(" ")[0] + " " + name.split(" ")[1] + "!"); 





// end program 