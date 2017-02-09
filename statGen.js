function statGen() {
//I want to give a range between 0 and 20.  I have to take the decimal of Math.random
// and multiply it by 20 to get a value that will make sense, but we need a non-decimal //number,so we have to round down to the nearest whole number.

  var stat = Math.floor( (Math.random() * 20) );
//If, however, we want a reasonable value, I want to 're-roll' if we get anything below 6
  if (stat <= 6) {
    var stat = statGen();
    return stat;
//Otherwise, I want to know in the console that it's working, and then I want the value returned
  } else {
    console.log("Your stat roll is " + stat);
    return stat;
  }

}


$(document).ready(function(){
  $('statRollerBtn').click(function(){
    console.log("The script has loaded");
    confirm("Ready to roll?");
    var strStat = statGen();
    var dexStat = statGen();
    var intStat = statGen();
    var wisStat = statGen();
    var conStat = statGen();
    var chaStat = statGen();
    var elStr = document.getElementById('strength');
    elStr.textContent = strStat;

    var elStr = document.getElementById('dexterity');
    elStr.textContent = dexStat;

    var elStr = document.getElementById('intelligence');
    elStr.textContent = intStat;

    var elStr = document.getElementById('wisdom');
    elStr.textContent = wisStat;

    var elStr = document.getElementById('constitution');
    elStr.textContent = conStat;

    var elStr = document.getElementById('charisma');
    elStr.textContent = chaStat;
  });
});

//Design the fucntion of the random stat generator

function statGen() {
//I want to give a range between 0 and 20.  I have to take the decimal of Math.random
// and multiply it by 20 to get a value that will make sense, but we need a non-decimal //number,so we have to round down to the nearest whole number.

  var stat = Math.floor( (Math.random() * 20) );
//If, however, we want a reasonable value, I want to 're-roll' if we get anything below 6
  if (stat <= 6) {
    var stat = statGen();
    return stat;
//Otherwise, I want to know in the console that it's working, and then I want the value returned
  } else {
    console.log("Your stat roll is " + stat);
    return stat;
  }

}
//Declare the variables for the different stats




//Render the stat values in the browser
/*
var elStr = document.getElementById('strength');
elStr.textContent = strStat;

var elStr = document.getElementById('dexterity');
elStr.textContent = dexStat;

var elStr = document.getElementById('intelligence');
elStr.textContent = intStat;

var elStr = document.getElementById('wisdom');
elStr.textContent = wisStat;

var elStr = document.getElementById('constitution');
elStr.textContent = conStat;

var elStr = document.getElementById('charisma');
elStr.textContent = chaStat;
*/
