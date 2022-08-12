/*
Sangeet Satpathy
CS22A Summer 2022
Assignment 4
calc.js --> This is the javascript code for a simple website in which the user can
input the amount of change they have, from 0-99 cents. The program provides an error if
the number entered is not within that range. The program them prints out the number of Quarters,
Dimes, Nickels, and Pennies needed to make that change, using the fewest number of coins. */

const CENTS_IN_QUARTER = 25;
const CENTS_IN_DIME = 10;
const CENTS_IN_NICKEL = 5;
const CENTS_IN_PENNY = 1;

const $ = selector => document.querySelector(selector);

var makeChange = function(amtChange) 
//Divides the change into the different coins and displays the results.
{
    var numQuarters;
    var numDimes;
    var numNickels;
    var numPennies;

    let amtRemaining = amtChange;
    numQuarters = parseInt(amtRemaining / CENTS_IN_QUARTER);
    amtRemaining = amtRemaining % CENTS_IN_QUARTER;

    numDimes = parseInt(amtRemaining / CENTS_IN_DIME);
    amtRemaining = amtRemaining % CENTS_IN_DIME;

    numNickels = parseInt(amtRemaining / CENTS_IN_NICKEL);
    amtRemaining = amtRemaining % CENTS_IN_NICKEL;

    numPennies = parseInt(amtRemaining / CENTS_IN_PENNY);
    amtRemaining = amtRemaining % CENTS_IN_PENNY;

    $("#quarters").value = numQuarters;
    $("#dimes").value = numDimes;
    $("#nickels").value = numNickels;
    $("#pennies").value = numPennies;
}

var processEntry = function()
//Reads the value inputted into the textbox and determines whether it is valid or not.
{
    let changeToConvert = parseInt($("#amtChange").value);
    if(changeToConvert > 0 && changeToConvert < 99 && changeToConvert != "")
    {
        makeChange(changeToConvert);
    }else{
        alert("You have to enter a number between 0 and 99.");
    }
}

$("#calculate").onclick = processEntry;