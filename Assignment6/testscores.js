/*
Sangeet Satpathy
CS22B Summer 2022
Assignment 6
7/22/22
This file contains the JS code for a Test Score Array program.
The user enters their name and their score. This will be stored into an array. The
user can display the results, which will show the highest scorer along with their highest score.
The user can also show to display the scores, which displays every Name entered along with their score.
*/
const $ = selector => document.querySelector(selector);
const NAMES = [];
const SCORES = [];
const MIN_ACCEPTED_SCORE = 0;
const MAX_ACCEPTED_SCORE = 100;

let addScore = function(){
    const INPUTTED_NAME = $("#name-input").value;
    const INPUTTED_SCORE = parseFloat($("#score-input").value);

    let dataValid = true;
    
    if(INPUTTED_NAME == "")
    {
        $("#invalid-name").textContent = "Please enter a name";
        dataValid = false;
    }
    
    if(INPUTTED_SCORE < MIN_ACCEPTED_SCORE || INPUTTED_SCORE > MAX_ACCEPTED_SCORE ||
        isNaN(INPUTTED_SCORE))
    {
        $("#invalid-score").textContent = "Score must be between 0 and 100.";
        dataValid = false;
    }

    if(!dataValid)
    {
        return;
    }

    //Resets the error message once they enter in a good input.
    $("#invalid-name").textContent = "";
    $("#invalid-score").textContent = "";

    let currArrayLength = NAMES.length;
    NAMES[currArrayLength] = INPUTTED_NAME;
    SCORES[currArrayLength] = INPUTTED_SCORE;

    $("#name-input").value = "";
    $("#score-input").value = "";
    $("#name-input").focus();
}

let displayResults = function(){
    const ARRAY_LENGTH = NAMES.length;
    const RESULTS_OUTPUT_CONTAINER = $("#results");

    RESULTS_OUTPUT_CONTAINER.innerHTML = '';

    let resultsHeader = document.createElement("h2");
    resultsHeader.textContent = "Results";
    resultsHeader.style.color = "blue";
    RESULTS_OUTPUT_CONTAINER.appendChild(resultsHeader);

    let maxNumIndex = 0;
    let sum = 0;
    for(let i = 0; i < ARRAY_LENGTH; i++)
    {
        let currentScore = SCORES[i];
        if(currentScore > SCORES[maxNumIndex])
        {
            maxNumIndex = i;
        }
        sum += currentScore;
    }

    let average = sum / ARRAY_LENGTH;

    let averageOutput = document.createElement("p");
    averageOutput.textContent = `Average score = ${average}`;

    let highScoreOutput = document.createElement("p");
    highScoreOutput.textContent = 
    `High score = ${NAMES[maxNumIndex]} with a score of ${SCORES[maxNumIndex]}`;

    RESULTS_OUTPUT_CONTAINER.appendChild(averageOutput);
    RESULTS_OUTPUT_CONTAINER.appendChild(highScoreOutput);

}

let displayScores = function(){
    const ARRAY_LENGTH = NAMES.length;
    const SCORES_OUTPUT_CONTAINER = $("#scores");

    SCORES_OUTPUT_CONTAINER.innerHTML = '';

    let scoreHeader = document.createElement("h2");
    scoreHeader.textContent = "Scores";
    scoreHeader.style.color = "blue";
    SCORES_OUTPUT_CONTAINER.appendChild(scoreHeader);

    for(let i = 0; i < ARRAY_LENGTH; i++)
    {
        let nameOutput = document.createElement("label");
        let scoreOutput = document.createElement("label");

        scoreOutput.innerHTML = SCORES[i];
        nameOutput.innerHTML = NAMES[i];

        //Creates unique id's for each iteration so that the labels can be paired/attached
        scoreOutput.setAttribute("id",`score-output-${i}`);
        nameOutput.setAttribute("for",`score-output-${i}`);
        
        SCORES_OUTPUT_CONTAINER.appendChild(nameOutput);
        SCORES_OUTPUT_CONTAINER.appendChild(scoreOutput);
        SCORES_OUTPUT_CONTAINER.appendChild(document.createElement("br"));
    }
}

$("#add").onclick = addScore;
$("#display-results").onclick = displayResults;
$("#display-scores").onclick = displayScores;
window.onload = $("#name-input").focus();