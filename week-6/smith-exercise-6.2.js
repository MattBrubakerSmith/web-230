/*
============================================
; Title: Exercise 6.2
; Author: Professor Krasso
; Date: 25 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use try/catch/finally statements
; for error handling.
;===========================================
*/ 
var header = require('../header.js');

/*
 Expected output:
 FirstName LastName
 Exercise 6.2
 Today's Date
 Catch clause: <Your message>
 Finally clause reached: End of program …
*/

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 6.2"));

// start program
try {
    if(fakeVariable === undefined) throw "ReferenceError";
    
} catch (err) {
    console.log("Catch clause: " + err)
} finally {
    console.log("Finally clause reached: End of program ...");
}

// end program