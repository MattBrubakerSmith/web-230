/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 30 May 2018
; Modified By: Matthew Smith
; Description: Simple program experimenting
; with JavaScript functions.
;===========================================
*/ 

var header = require('../header.js'); 

// start program

/*
    Expected output:
    FirstName LastName
    Assignment 2.4
    Today's Date
    Hello my name is <concatenated full name>!
    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.
*/ 

// function(s) go here...
function fullName(first, last) {
    return first + " " + last;
}

function dateWriter(year, month, day) {
    var date = new Date(year, month, day);
    return date;
}

function formatNumber(number, fixedPosition) {
    return number.toFixed(fixedPosition);
}

function convertToInt(string) {
    return parseInt(string);
}

function convertToFloat(string) {
    return parseFloat(string);
}

var firstName = "Matthew";
var lastName = "Smith";
var today = dateWriter(2018, 4, 30);

// output 
console.log(header.display(firstName, lastName, "Assignment 2.4") +
            "\n\n" + "Hello, my name is " + fullName(firstName, lastName) + "!" +
            "\n\n" + "Today's date is " + dateWriter(2018, 4, 30).toLocaleDateString() + 
            " and the current temperature is " + formatNumber(82, 1) + "." +
            "\n\n" + "I am " + convertToInt("36") + 
            " years old and my savings account goal is $" + convertToFloat("9999999999.99") + " dollars."); 




// end program 