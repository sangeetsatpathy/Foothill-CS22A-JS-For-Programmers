/*
Sangeet Satpathy
CS22B Summer 2022
Assignment 8
7/28/22
This file contains the JS code for an information file that provides information on
Murach's HTML5 and CSS3 (4th Edition). The user can click on 3 different links, which all
expand the text to show more. Upon viewing the hidden information, the user can then hide it again.
*/

$(() => {
    $("a").click(function(event){
        event.preventDefault();
        const linkElement = event.currentTarget;
        const link = linkElement.url;
        const prevDiv = linkElement.previousElementSibling;
        console.log($(prevDiv).attr("class"));
        $(prevDiv).toggleClass("hide");
        if(!$(prevDiv).hasClass("hide"))
        {
            linkElement.textContent = "Show less";
        } else {
            linkElement.textContent = "Show more";
        }
    });
});