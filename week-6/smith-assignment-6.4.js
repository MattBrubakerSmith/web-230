/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 25 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use object literal syntax to 
; define and access object properties.
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:
 FirstName LastName
 Assignment 6.4
 Today's Date
 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).
 */

// Creates header
console.log(header.display("Matthew", "Smith", "Assignment 6.4"));

// start program

var ticket = {
    // ticket properties
    id: 0,
    name: "Ticky McTicketface",
    dateCreated: new Date(),
    priority: 1,
    personId: 911,
    person: {
        // person properties
        id: 911,
        firstName: "Matthew",
        lastName: "Smith",
        jobTitle: "Village Idiot"
    }
};

console.log("Ticket " + ticket.id +
            " was created on " + ticket.dateCreated.toLocaleDateString() +
            " and assigned to employee " + ticket.person.firstName + 
            " " + ticket.person.lastName + 
            " (" + ticket.person.jobTitle + ").");

// end program