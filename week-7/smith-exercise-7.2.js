/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 2 July 2018
; Modified By: Matthew Smith
; Description: This exercise demonstrates
; how to create constructor objects using
; functions.
;===========================================
*/ 
var header = require('../header.js');

/*
 Expected output:
 FirstName LastName
 Exercise 7.2
 Today's Date
 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst
 */

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 7.2"));

// start program

function Employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

let employees = [
    new Employee(1, "Thomas", "Edison", "Engineer"),
    new Employee(2, "Benjamin", "Franklin", "Software Engineer"),
    new Employee(3, "Nikola", "Tesla", "Project Manager"),
    new Employee(4, "Charles", "Babbage", "Product Manager"),
    new Employee(5, "Stringer", "Bell", "Business Analyst")
];

for(let emp of employees) {
    console.log(`${emp.id} ${emp.firstName} ${emp.lastName} ${emp.title}`);
}

// end program