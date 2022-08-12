/*
Sangeet Satpathy
CS22B Summer 2022
Assignment 5
7/10/22
This file contains the JS code for a simple sales tax calculator.
The user enters their subtotal($0-$1000) and their tax percentage(0% - 12%). Once they click the
calculate button, the program will output the sales tax and the total amount. The user also has
the option to clear all the textboxes on the site. If the user inputs a value outside of the 
acceptable range, then the program will throw an alert message.
*/

const $ = selector => document.querySelector(selector);

let processEntries = function()
//Reads the entered values and prints the sales tax and total values. Throws alert if invalid inputs.
{
    const MIN_SUBTOTAL = 0;
    const MAX_SUBTOTAL = 1000;
    const MIN_TAX_RATE = 0;
    const MAX_TAX_RATE = 12;

    let subtotal = parseFloat($("#subtotal").value);
    let taxRatePercent = parseFloat($("#taxRate").value);

    if(subtotal > MIN_SUBTOTAL && subtotal < MAX_SUBTOTAL &&
        taxRatePercent > MIN_TAX_RATE && taxRatePercent < MAX_TAX_RATE)
    {
        let taxRateDecimal = parseFloat(taxRatePercent/100);
        let salesTax = subtotal * taxRateDecimal;
        let total = subtotal + salesTax;

        $("#salesTax").value = salesTax.toFixed(2);
        $("#total").value = total.toFixed(2);
    } else { //Determines which error, if not both, is required to be shown.
        if(subtotal <= MIN_SUBTOTAL || subtotal >= MAX_SUBTOTAL)
        {
            alert("Subtotal must be > 0 and < 10000");
        }
        if(taxRatePercent <= MIN_TAX_RATE || taxRatePercent >= MAX_TAX_RATE)
        {
            alert("Tax Rate must be > 0 and < 12")
        }
    }
    $("#subtotal").focus();
}

let clearTextBoxes = function()
{
    $("#subtotal").value = "";
    $("#taxRate").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";

    $("#subtotal").focus();
}

$("#calculate").onclick = processEntries;
window.onload = $("#subtotal").focus();
$("#clear").onclick = clearTextBoxes;