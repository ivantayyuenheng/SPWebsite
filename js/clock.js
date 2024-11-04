"use strict";

/*
FED CA2 Assignment
    Assignment Theme: "Save the Earth"

    Javascript for All 4 Website Pages (index.html, earth.html, sgpoly.html, form.html)
    Author: IVAN TAY YUEN HENG
    Date: 08/05/2023

     Filename: clock.js
*/

// Clock

function clock() {
    const date = new Date();

    // Get current local date
    var dateStr = date.toLocaleDateString();

    // Get current time
    var time = date.toLocaleTimeString();

    // Get current day
    var day = date.getDay();
    var dayget = "";

    // Find the current day name
    if (day == 0) {
        dayget = "Sunday";
    } else if (day == 1) {
        dayget = "Monday";
    } else if (day == 2) {
        dayget = "Tuesday";
    } else if (day == 3) {
        dayget = "Wednesday";
    } else if (day == 4) {
        dayget = "Thursday";
    } else if (day == 5) {
        dayget = "Friday";
    } else if (day == 6) {
        dayget = "Saturday";
    }

    // Display in the Id 'clock'
    document.getElementById("clock").innerHTML = dateStr + "<br>" + dayget + "<br>" + time;
}

// Enable the function
clock();

// The function runs every 1000 ms
setInterval(clock, 1000);






