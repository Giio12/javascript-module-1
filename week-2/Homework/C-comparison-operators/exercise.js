/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors; // finish this statement
function compare(students, mentors) {
  if (studentCount > mentorCount) {
    return moreStudentsThanMentors = true;
  }
  return moreStudentsThanMentors = false;
}
compare(studentCount, mentorCount)

var roomMaxCapacity = 25;
var enoughSpaceInRoom; // finish this statement
function calculateCapacity(roomMaxCapacity, students, mentors) {
  let total = students + mentors
  if (total <= roomMaxCapacity) {
    return enoughSpaceInRoom = true;
  }
  return enoughSpaceInRoom = false;
}
calculateCapacity(roomMaxCapacity, studentCount, mentorCount);

var personA = "Daniel";
var personB = "Irina";
var sameName; // finish this statement
function compareName(a, b) {
  if (a == b) {
    return sameName = true;
  }
  return sameName = false;
}
compareName(personA, personB)

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/