var string = 'John';
console.log(string);
// Variable name cannot be a reserved keyword (i.e. let, console, script, if, else)
// Variable name cannot start with a number (i.e. 3name, 5script)
// Names are also case-sensitive

var variable1 = 25;
var variable2 = 13;
var addition = variable1 + variable2;
var subtractionP = variable1 - variable2;
var subtractionN = variable2 - variable1;
var multiplication = variable1 * variable2;
var division = variable1 / variable2;

console.log("The first variable is: " + variable1);
console.log("The second variable is: " + variable2);
console.log("25+13=" + addition);
console.log("25-13=" + subtractionP);
console.log("13-25" + subtractionN);
console.log("25x13" + multiplication);
console.log("30/2=" + 30 / 2);
console.log("25/13" + division);

// In JavaScript there are primitive and reference types of data
var nameFirst = 'John'; // String Literal
var numberAge = 24; // Number Literal
var allowed = true; // Boolean Literal
var nameMiddle;     // Null
var nameMiddleInitial;  // Null

console.log("My Age: ", numberAge);
document.getElementById("myMessage").innerText = "My Age: " + numberAge;
document.getElementById("myMessage2").innerHTML = "Variable 1 is " + variable1 + "<br/>"
document.getElementById("myMessage3").innerHTML = "Variable 2 is " + variable2 + "<br/>"

var names = ["Jack", "Isabella", "Tristan"]