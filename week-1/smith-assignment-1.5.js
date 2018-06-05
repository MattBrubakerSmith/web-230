/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 22 May 2018
; Modified By: Matthew Smith
; Description: Simple program practicing
; the use and understanding of types,
; values, and variables.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Albert";
var myLastName = "Einstein";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

var firstName = "Dolph";
var lastName = "Lundgren";
var street = "99 Expendable Blvd.";
var city = "New York";
var state = "NY";
var payRate = 25.75;
var hireDate = new Date("December 3, 2001");

var empData = "First Name: " + firstName + "\n" +
    "Last Name: " + lastName + "\n" +
    "Address: " + street + ", " + city + ", " + state + "\n" +
    "Pay Rate: $" + payRate.toFixed(2) + "\n" +
    "Hire Date: " + (hireDate.getMonth() + 1) + "/" + hireDate.getDate() + "/" + hireDate.getFullYear();

console.log(empData);
console.log("\n");

firstName = "Bubba";
lastName = "Gumpshrimpcompny";
street = "728 Scampi Cir.";
city = "Greenbough";
state = "AL";
payRate = 1;
hireDate = new Date("April 1, 1993");

empData = "First Name: " + firstName + "\n" +
    "Last Name: " + lastName + "\n" +
    "Address: " + street + ", " + city + ", " + state + "\n" +
    "Pay Rate: $" + payRate.toFixed(2) + "\n" +
    "Hire Date: " + (hireDate.getMonth() + 1) + "/" + hireDate.getDate() + "/" + hireDate.getFullYear();

console.log(empData);
console.log("\n");

firstName = "Dorothy";
lastName = "Ozborne";
street = "123 Yellowbrick Rd.";
city = "Emerald City";
state = "OZ";
payRate = 27.5;
hireDate = new Date("September 15, 1970");

empData = "First Name: " + firstName + "\n" +
    "Last Name: " + lastName + "\n" +
    "Address: " + street + ", " + city + ", " + state + "\n" +
    "Pay Rate: $" + payRate.toFixed(2) + "\n" +
    "Hire Date: " + (hireDate.getMonth() + 1) + "/" + hireDate.getDate() + "/" + hireDate.getFullYear();

console.log(empData);
console.log("\n");

firstName = "Mario";
lastName = "Brothers";
street = "555 Goomba Lane";
city = "Italy";
state = "Japan";
payRate = 100;
hireDate = new Date("November 30, 1980");

empData = "First Name: " + firstName + "\n" +
    "Last Name: " + lastName + "\n" +
    "Address: " + street + ", " + city + ", " + state + "\n" +
    "Pay Rate: $" + payRate.toFixed(2) + "\n" +
    "Hire Date: " + (hireDate.getMonth() + 1) + "/" + hireDate.getDate() + "/" + hireDate.getFullYear();

console.log(empData);
console.log("\n");

firstName = "Suzanne";
lastName = "Sommers";
street = "3 Company St.";
city = "Probably LA";
state = "CA";
payRate = 22.25;
hireDate = new Date("May 21, 1985");

empData = "First Name: " + firstName + "\n" +
    "Last Name: " + lastName + "\n" +
    "Address: " + street + ", " + city + ", " + state + "\n" +
    "Pay Rate: $" + payRate.toFixed(2) + "\n" +
    "Hire Date: " + (hireDate.getMonth() + 1) + "/" + hireDate.getDate() + "/" + hireDate.getFullYear();

console.log(empData);

// end of program 