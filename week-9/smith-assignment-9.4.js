/*
; Title: Assignment 9.4
; Author: Matthew Smith
; Date: 12 July 2018
; Description: This assignment demonstrates
; how to use client-side debugging in Chrome.
*/

function Calculate() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let operatorType = document.getElementById("operator").value;

    let result;

    switch(operatorType) {
        case "add": {
            result = number1 + number2;
            break;
        }
        case "subtract": {
            result = number1 - number2;
            break;
        }
        case "multiply": {
            result = number1 * number2;
            break;
        }
        case "divide": {
            result = number1 / number2;
            break;
        }
    }

    document.getElementById("result").innerHTML = result;
}
