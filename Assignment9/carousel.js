/*
Sangeet Satpathy
CS22B Summer 2022
Assignment 9
8/3/22
This file contains the JS code for a program that displays the different book covers for the
different editions of Murach's Javascript books utilizing animations. The user can click on different 
covers in the slide panels below, and the main image above it will fade out, moving left,
change depending on what the user clicked, and fade in once the image has changed, moving right.
*/

$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
        let tagClicked = event.currentTarget;
        let url = $(tagClicked).attr("href");
        $("#image").animate({opacity: 0, marginLeft: "-=205px"}, 1000, function(){
            $("#image").attr("src", url); //Change the image while it is invisible, so it appears
            //as if the image has "changed".
            $("#image").animate({opacity: 1, marginLeft: "+=205px"}, 1000);
        });
    });
});