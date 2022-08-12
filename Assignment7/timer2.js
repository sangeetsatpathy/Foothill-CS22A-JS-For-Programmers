/*
Sangeet Satpathy
CS22B Summer 2022
Assignment 7
7/27/22
This file contains the JS code for a Clock and Stopwatch Program. This is the code for PHASE 2, so
the stopwatch is implemented in this file.
Once the user loads the page, a clock will appear, updating the time every second.
Below the clock is a stopwatch. The user can start the stopwatch, which updates every
10 milliseconds, stop it, and reset it as needed.
*/

let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;
let alreadyRunning = false;

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

const tickStopWatch = () => {
    elapsedMilliseconds += 10;
    if (elapsedMilliseconds >= 1000)
    {
        elapsedSeconds += 1;
        elapsedMilliseconds -= 1000;
    }
    if (elapsedSeconds >= 60)
    {
        elapsedMinutes += 1;
        elapsedSeconds -= 60;
    }
    $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
    $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
    $("#s_ms").textContent = elapsedMilliseconds.toString().padStart(3, "0");
}

const startStopwatch = evt => {
    //checks if the stopwatch is already running to ensure that clicking the start button
    //several times will not cause the stopwatch to speed up.
    if(alreadyRunning == true)
    {
        return;
    }
    evt.preventDefault();
    stopwatchTimer = setInterval(tickStopWatch, 10);
    alreadyRunning = true;
}

const stopStopwatch = evt => {
    evt.preventDefault();
    clearInterval(stopwatchTimer);
    alreadyRunning = false;
}

const resetStopwatch = evt => {
    evt.preventDefault();
    elapsedMilliseconds = 0;
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
    $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
    $("#s_ms").textContent = elapsedMilliseconds.toString().padStart(3, "0");
}

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);

    $("#start").onclick = startStopwatch;
    $("#stop").onclick = stopStopwatch;
    $("#reset").onclick = resetStopwatch;
});