/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 5 June 2018
; Modified By: Matthew Smith
; Description: This program is an exercise
; in converting if/else statements into 
; switch statements.
;===========================================
*/ 

var header = require('../header.js'); 

// start program

/*
    Expected output:
    FirstName LastName
    Exercise 3.3
    Today's Date
    // Expected output
    The enter key was pressed 
*/ 

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 3.3"));

// Multiway branch of if statements (replace with a switch statement)
var eventKeyCode = 13;

// Commented out if/else statement

// if (eventKeyCode == 13) {
//     console.log("The enter key was pressed"); 
// } else if (eventKeyCode == 16) {
//     console.log("The shift key was pressed"); 
// } else if (eventKeyCode == 32) {
//     console.log("The spacebar key was pressed")
// } else if (eventKeyCode == 8) {
//     console.log("The backspace / delete key was pressed");
// } else {
//     console.log("Unrecognized key press"); 
// }

// If/else converted to switch statement
switch(eventKeyCode) {
    case 13: {
        console.log("The enter key was pressed"); 
        break;
    }
    case 16: {
        console.log("The shift key was pressed"); 
        break;
    }
    case 32: {
        console.log("The spacebar key was pressed");
        break;
    }
    case 8: {
        console.log("The backspace / delete key was pressed");
        break;
    }
    default: {
        console.log("Unrecognized key press"); 
        break;
    }
}

// end program 