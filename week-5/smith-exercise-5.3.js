/*
============================================
; Title: Exercise 5.3
; Author: Professor Krasso
; Date: 20 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to iterate over array-like objects 
; with the built-in forEach() method.
;===========================================
*/ 

var header = require('../header.js');

/*
 Expected output:
 FirstName LastName
 Exercise 5.3
 Today's Date
 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5
 */

// Creates header
console.log(header.display("Matthew", "Smith", "Exercise 5.3"));

// start program
var composers = [
    {
        firstName: "Wolfgang",
        lastName: "Mozart",
        genre: "Classical",
        rating: 10
    },
    {
        firstName: "Frédéric",
        lastName: "Chopin",
        genre: "Classical",
        rating: 8
    },
    {
        firstName: "Pyotr",
        lastName: "Tchaikovsky",
        genre: "Classical",
        rating: 9
    },
    {
        firstName: "Johannes",
        lastName: "Brahms",
        genre: "Classical",
        rating: 7
    },
    {
        firstName: "Danger",
        lastName: "Mouse",
        genre: "Ecclectic",
        rating: 10.1
    }
]

console.log("-- COMPOSERS --");

composers.forEach(function(composer) {
    let composerString = "First Name: " + composer.firstName + ", Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating; 
    console.log(composerString);
});

// end program