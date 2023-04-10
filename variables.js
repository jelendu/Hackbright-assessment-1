//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE

let myName = "Joanna Elendu"; // declares variable 'myName'
console.log(myName);

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

let faveNum = "7"; // // declares variable 'faveNum'
console.log(faveNum);

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE

let lovesCode = "true"; // declares variable 'lovesCode'
console.log(lovesCode);

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE

if (faveNum === 13) {
  // executing block of code to check if it's true or otherwise
  console.log("lucky 13!");
} else {
  console.log("not lucky 13");
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

let faveNumFive = 7;
for (let i = 0; i < 5; i++) {
  // loop itirating over this block of code 5 times
  console.log(faveNumFive);
}
