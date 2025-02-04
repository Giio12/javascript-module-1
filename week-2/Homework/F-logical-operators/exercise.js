/*
  Logical Operators
  ---------------------------------
  Using logical operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

// Do not change these two statement
var htmlLevel = 8;
var cssLevel = 4;

function greaterThan(htmlLevel) {
  if (htmlLevel > 5) {
    return htmlLevelAbove5 = true;
  }
  return htmlLevelAbove5 = false;
}
greaterThan(htmlLevel);

function greaterThan5(cssLevel) {
  if (cssLevel > 5) {
    return cssLevelAbove5 = true;
  }
  return cssLevelAbove5 = false;

}
greaterThan5(cssLevel)
// Finish the statement to check whether HTML, CSS knowledge are above 5
// (hint: use the comparison operator from before)
var htmlLevelAbove5;
var cssLevelAbove5;

// Finish the next two statement
// Use the previous variables and logical operators
// Do not "hardcode" the answers
function compareIfBoth(htmlLevel, cssLevel) {
  if (htmlLevel > 5 && cssLevel > 5) {
    return cssAndHtmlAbove5 = true;
  }
  return cssAndHtmlAbove5 = false;
}
compareIfBoth(htmlLevel, cssLevel)

function compareIfAny(htmlLevel, cssLevel) {
  if (htmlLevel > 5 || cssLevel > 5) {
    return cssOrHtmlAbove5 = true;
  }
  return cssOrHtmlAbove5 = false;
}
compareIfAny(htmlLevel, cssLevel)

var cssAndHtmlAbove5;
var cssOrHtmlAbove5;

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is Html knowledge above 5?", htmlLevelAbove5);
console.log("Is CSS knowledge above 5?", cssLevelAbove5);
console.log("Is Html And CSS knowledge above 5?", cssAndHtmlAbove5);
console.log(
  "Is either Html or CSS knowledge above 5?",
  cssOrHtmlAbove5
);

/* 
  EXPECTED RESULT
  ---------------
  Is Html knowledge above 5? true
  Is CSS knowledge above 5? false
  Is Html And CSS knowledge above 5? false
  Is either Html or CSS knowledge above 5? true
*/