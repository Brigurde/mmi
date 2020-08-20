var time = document.getElementById('remainingTime');
window['moment-range'].extendMoment(moment);
moment.locale('fr');
var total;
setTime();
setInterval(setTime, 1000);

var fromDate;
var toDate;
var range;
var string;
function setTime() {
  if(total!=""){
  const start = moment();
  const end   = moment('2021-10-1', 'YYYY-MM-DD');
  const range = parseInt(moment.range(start, end).valueOf()/1000);
  string = secondsToDhms(range)[0];
  time.innerHTML = string;
  total = secondsToDhms(range)[1];
}
}
function secondsToDhms(seconds) {
seconds = Number(seconds);
var y = Math.floor(seconds / (3600*24*365));
var d = Math.floor(seconds % (3600*24*365)/(3600*24));
var h = Math.floor(seconds % (3600*24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);

var yDisplay = y > 0 ? y + (y == 1 ? " année, <br>" : " années, <br>") : "";
var dDisplay = d > 0 ? d + (d == 1 ? " jour, <br>" : " jours, <br>") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " heure, <br>" : " heures, <br>") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute et <br>" : " minutes et <br>") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " seconde" : " secondes") : "";

//activer ça pour émuler la fin du compteur
 // yDisplay = "";
 // dDisplay ="";
 // hDisplay = "";
 // mDisplay ="";
 // sDisplay = "";
if(yDisplay+dDisplay+hDisplay+mDisplay+sDisplay == ""){
  return [('<strong>' + 'Enfin ! C\'est le grand jour, le jour de ton départ en retraite !!!!!' + '</strong>'),("")];
}
return [('<strong>' + yDisplay + dDisplay + hDisplay + mDisplay + sDisplay+ '</strong>'),(yDisplay+dDisplay+hDisplay+mDisplay+sDisplay)];
}
