"use strict";

/*
FED CA2 Assignment
	Assignment Theme: "Save the Earth"

	Javascript for index.html (to create a workout table)
	Author: IVAN TAY YUEN HENG
	Date: 08/05/2023

	 Filename: workouttable.js
*/

// Array of Workout description
var squatdesc = ["Squats", "Quads, Glutes", "Dumbbell", "5-8 reps"];
var benchdesc = ["Bench Press", "Chest Shoulders", "Barbell", "6-10 reps"];
var deadliftdesc = ["Deadlifts", "Glutes, Hamstrings", "Barbell", "3-5 reps"];
var crunchdesc = ["Bicycle Crunch", "Abdominals", "Bodyweight", "15-25 reps"];
var workoutdesc = [squatdesc, benchdesc, deadliftdesc, crunchdesc];


// Fetch the Id ("workout") and start the function Workout Table 
document.getElementById("workout").innerHTML = workoutTable();

// Workout Table Function
function workoutTable() {
	var workout = "<table class='table  table-striped table-hover caption-top justify-content-center'>";
	workout += workoutHeader();
	workout += workoutList();
	workout += "</table>";
	return workout;
}


function workoutHeader() {
	// Array for Workout Header
	var workoutHeaderlist = ["Exercise", "Workout Category", "Equipment", "Repetitions"];
	var row = "<thead class = 'table-dark'> <tr>";

	// Loop through the Workout Header array
	for (var i = 0; i < workoutHeaderlist.length; i++) {
		row += "<th scope='col'>" + workoutHeaderlist[i] + "</th>";
	}

	row += "</tr></thead>";
	return row;
}

// Display the workout list
function workoutList() {

	var desc = "<tbody>";

	for (var j = 0; j < workoutdesc.length; j++) {

		var validator = 0;
		desc += "<tr>";

		for (var k = 0; k < workoutdesc[j].length; k++) {

			// If it is at the beginning of the row.
			if (k == 0) {
				desc += "<th scope = 'row'>" + workoutdesc[j][k] + "</th>";

				// If it is not at the beginning of the row.
			} else {
				desc += "<td>" + workoutdesc[j][k] + "</td>";
			}

			// Validator increment
			validator++;
		}
	}

	desc += "</tbody>";
	return desc;
}
