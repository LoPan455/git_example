

console.log("The script has loaded");

function statGen() {
  var stat = Math.floor( (Math.random() * 20));
  if (stat <= 6) {
    statGen();
  } else {
    console.log("Your stat roll is " + stat);
    return stat;
  }

}

var strStat = statGen();
var dexStat = statGen();

var elStr = document.getElementById('strength');
elStr.textContent = strStat;
