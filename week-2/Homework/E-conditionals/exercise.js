/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out ""
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
function greet(name, role) {
  if (role == "mentor") {
    console.log(`Hi, I'm ${name}, I'm a mentor.`)
  } else {
    console.log(`Hi, I'm ${name}, I'm a student.`)
  }
}
greet(name, danielsRole)