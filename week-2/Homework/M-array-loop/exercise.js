/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function name(week) {
  for (let i = 0; i <= week.length - 1; i++) {
    if (week[i][0] == "T") {
      console.log(week[i])
    }
  }
}
name(daysOfWeek)