



/*
var thing0 = prompt("What is the first number?");

confirm("Thing0 is set to " + thing0);

var thing1 = prompt("What is the second number");

confirm("Thing1 is set to " + thing1);

alert("heading into the fucntion, addSomeNumbers...");
*/

var arg1 = prompt("Give me a value for the first argument");
var num1 = Number(arg1);
confirm("You entered " + arg1);
var arg2 = prompt("Give me a value for the second argument");
var num2 = Nsumber(arg2);
confirm("You entered " + arg2);


function addSomeNumbers(ham, cheese) {
  alert("Just kicked off addSomeNumbers");
  return ham + cheese;
  alert("The numbers were just added togther,");
};

alert("The total is " + addSomeNumbers(num1, num2));
