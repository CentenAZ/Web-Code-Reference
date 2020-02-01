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

var myArray = [];   // an Array
var myObject = {};  // an Object

var names = ["Jack", "Isabella", "Tristan"];    // Arrays can store strings, numbers/values, booleans. Any type of data
names[3] = "Jay";
names[4] = "Kaz";
console.log(names);
console.log("Test", names[3].substring(0, 1));