/*
Sangeet Satpathy
CS22B Summer 2022
Assignment 7
7/27/22
This file contains the JS code for a Clock Program. This is the code for PHASE 1, so
the stopwatch to be implemented is not in this file.
Once the user loads the page, a clock will appear, updating the time every second.
The HTML for the stopwatch will show, but none of the functionality works on this file.
It is implemented in timer2.js.
*/

const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    let dateObj = new Date();
    let hourMilitary = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    var ampm;
    var hourStandard;

    if(hourMilitary > 12)
    {
        hourStandard = hourMilitary - 12;
        ampm = "PM";
    } else {
        hourStandard = hourMilitary;
        ampm = "AM";
    }

    if(hourStandard == 0)
    {
        hourStandard = 12;
    }

    $("#hours").textContent = padSingleDigit(hourStandard) + ": ";
    $("#minutes").textContent = padSingleDigit(minutes) + ": ";
    $("#seconds").textContent = padSingleDigit(seconds);
    $("#ampm").textContent = ampm;
}

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
});