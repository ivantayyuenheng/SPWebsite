"use strict";

/*
FED CA2 Assignment
    Assignment Theme: "Save the Earth"

    Javascript for earth.html (to find its earthday countdown and calendar)
    Author: IVAN TAY YUEN HENG
    Date: 08/05/2023

    Filename: clock.js
*/

/* Find the next Earth Day date */

const date = new Date();

var nextEarthDay = new Date("April 22, " + (date.getFullYear()));


if (date >= nextEarthDay) {

    nextEarthDay = new Date("April 22, " + (date.getFullYear() + 1));
}

var earthDay = new Date(nextEarthDay);



/* Calendar */
document.getElementById("calendar").innerHTML = createCalendar(earthDay);

function createCalendar(earthDate) {
    var calendarEarth = earthTitle(earthDate);

    calendarEarth += "<table class = 'table table-dark table-bordered border-light col-12 mt-3' id = 'calendar_table'>";
    calendarEarth += earthWeekDay();
    calendarEarth += earthDays(earthDate);
    calendarEarth += '</table>';
    calendarEarth += "<figcaption> Note: After the current Earth Day has passed. The next Earth Day year calendar will appear.</figcaption>"
    return calendarEarth;
}

/* Display Earth Title */
function earthTitle(earthDate) {

    var month = "Apr"

    var year = earthDate.getFullYear();

    return "<h3 class = 'text-center fs-1 text-white'>" + month + " " + year + "</h3>";
}

/* Table row for weekdays */
function earthWeekDay() {
    var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    var earthRow = "<tr class = 'text-center'>";

    for (var i = 0; i < dayName.length; i++) {
        earthRow += "<th>" + dayName[i] + "</th>";
    }

    earthRow += "</tr>";
    return earthRow;
}


/* Display days in the table */
function earthDays(earthDate) {

    var firstDay = new Date(earthDate.getFullYear(), earthDate.getMonth(), 1);
    var weekDay = firstDay.getDay();

    // Blank cells if days are not presented at the start
    var earthTableDays = "<tr>";
    for (var i = 0; i < weekDay; i++) {
        earthTableDays += "<td class = 'p-3'></td>"
    }

    // Each day of the months
    // Total days in Earth Day is 30;
    var totalearthDays = 30;


    var earthDayHighlight = earthDate.getDate();

    for (var j = 1; j <= totalearthDays; j++) {
        firstDay.setDate(j);  
        weekDay = firstDay.getDay();
        
        if (weekDay == 0) {

            earthTableDays += "<tr>";
        }

        if (j === earthDayHighlight) {
            earthTableDays += "<td class = 'bg-success'>" + j + "<br> <p> Earth Day! </p>" + "</td>"
        } else {
            earthTableDays += "<td class = 'p-3'>" + j + "</td>"
        }
        if (weekDay == 6) {
            earthTableDays += "</tr>";
        }

    }

    // Ensure that the end day is filled with <td> too
    var endDay = firstDay.getDay();
    if (endDay !== 6) {
        for (var i = endDay + 1; i <= 6; i++) {
            earthTableDays += "<td class = 'p-3'></td>";
        }
        earthTableDays += "</tr>";
    }
    return earthTableDays;
}


/* Earth Day Countdown */
function countdown() {

    const currentDate = new Date();

    var nextEarthDaycountdown = new Date("April 22, " + (date.getFullYear()));


    if (currentDate >= nextEarthDaycountdown) {

        nextEarthDaycountdown = new Date("April 22, " + (date.getFullYear() + 1));
    }

    var earthDaycountdown = new Date(nextEarthDaycountdown);

    /* Find the Time difference with the current date and the Earth Day countdown */
    var countdownDifference = earthDaycountdown - currentDate;
    var daysCountdown = Math.floor((countdownDifference) / (1000 * 60 * 60 * 24));
    var hrsCountdown = Math.floor((countdownDifference / (1000 * 60 * 60 * 24) - daysCountdown) * 24);
    var minsCountdown = Math.floor((((countdownDifference / (1000 * 60 * 60 * 24) - daysCountdown) * 24) - hrsCountdown) * 60);
    var secsCountdown = Math.floor((((((countdownDifference / (1000 * 60 * 60 * 24) - daysCountdown) * 24) - hrsCountdown) * 60) - minsCountdown) * 60);

    document.getElementById("dayscountdown").textContent = daysCountdown;
    document.getElementById("hrscountdown").textContent = hrsCountdown;
    document.getElementById("minscountdown").textContent = minsCountdown;
    document.getElementById("secscountdown").textContent = secsCountdown;
}

/* Let the function countdown() run */
countdown();
setInterval(countdown, 1000);



