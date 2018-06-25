/*
============================================
; Title: Exercise 6.3
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
 Exercise 6.3
 Today's Date
 {id: <ticket id>, name: <ticket name>, requester: <your name>}
 */

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 6.3"));

// start program

var ticket = {
    id: 0,
    name: "Mort McRealname",
    requester: "Matthew Smith"
};

console.log("{id: " + ticket.id + 
            ", name: " + ticket.name + 
            ", requester: " + ticket.requester + 
            "}");

// end program