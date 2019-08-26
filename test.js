var cday;
var timeInSecs;
var ticker;
function getSeconds() {
var now = new Date();
var nowtime= now.getTime();  // time now in milliseconds
var countdowntime = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0); //  16 hrs = 4 pm
var dy = 5 ; // Friday (day 5) - change for other days 0-6
var atime = countdowntime.getTime();
var diff = parseInt((atime - nowtime)/1000);  // positive if date is in future
if (diff >0) {cday = dy - now.getDay();}
else {cday =  dy - now.getDay() -1;}
if (cday < 0) {cday += 7;}   // aleady passed countdown time, so go for next week
if (diff <= 0) { diff += (86400 * 7)}
startTimer (diff);}
function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()",1000); tick();} // to start counter display right away
function tick() {
var secs = timeInSecs;
if (secs>0){timeInSecs--; } else { 
clearInterval(ticker); // stop counting at zero
getSeconds();}  // and start all over again! 
var days = Math.floor(secs/86400);secs %= 86400;
var hours= Math.floor(secs/3600);secs %= 3600;
var mins = Math.floor(secs/60);secs %= 60;
var result = "Time remaining " + cday +' day(s) ';
//result += ((hours < 10 ) ? "0" : "" ) + hours + " hours " + ( (mins < 10) ? "0" : "" ) + mins + " minutes " + ( (secs < 10) ? "0" : "" ) + secs + " seconds";
document.getElementById("countdown").innerHTML =  result;
console.log(days,hours,mins);
}