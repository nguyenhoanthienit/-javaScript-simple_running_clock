const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

// Change hour min sec to degree on clock
// 1sec = 6deg
var secPos = sec * 6;
var minPos = (min + sec / 60) * 6;
var hourPos = (hour + min / 60) * 30;

function RunningClock() {
	secPos = secPos + 6;
	minPos = minPos + 6 / 60;
	hourPos = hourPos + 30 / 3600;

	// rotate using style transform
	HOURHAND.style.transform = "rotate(" + hourPos + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
}

// Run the clock
setInterval(RunningClock, 1000);


