



var arg1 = prompt("Give me a value for the first argument");
var num1 = Number(arg1);
confirm("You entered " + arg1);
var arg2 = prompt("Give me a value for the second argument");
var num2 = Number(arg2);
confirm("You entered " + arg2);


function addSomeNumbers(ham, cheese) {
  alert("Just kicked off addSomeNumbers");
  return ham + cheese;
  alert("The numbers were just added togther,");
};

alert("The total is " + addSomeNumbers(num1, num2));
