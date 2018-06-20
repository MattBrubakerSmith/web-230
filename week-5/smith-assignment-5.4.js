/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 20 June 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use the built-in map() method to
; filter array-like objects.
;===========================================
*/ 

var header = require('../header.js');

/*
Expected output:
 FirstName LastName
 Assignment 5.4
 Today's Date
 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven
 Rating: 10
 Composer: Mozart
 Rating: 9
 Composer: Bach
 Rating: 6
 Composer: Haydn
 Rating: 5
 Composer: Schubert
 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven
 Genre: Classical
 Composer: Mozart
 Genre: Classical
 Composer: Bach
 Genre: Classical
 Composer: Haydn
 Genre: Classical
 Composer: Schubert
 */

// Creates header
console.log(header.display("Matthew", "Smith", "Assignment 5.4"));

// start program

var famousComposers = [
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

var composersByRating = famousComposers.map(function(composer) {
    return composer.rating;
});

var composersByGenre = famousComposers.map(function(composer) {
    return composer.genre;
});

console.log("-- COMPOSER BY RATING --");
composersByRating.forEach(function(rating, index) {
    console.log("Rating: " + rating + "\nComposer: " + famousComposers[index].lastName);
});

console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach(function(genre, index) {
    console.log("Genre: " + genre + "\nComposer: " + famousComposers[index].lastName);
});


// end program