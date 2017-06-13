var pomodoroCount = 0
testEnd = new Date(1497378493231);
var timer;

window.onload = function() {
	timer = window.setInterval(function() {
		document.getElementById("minutes").innerHTML = getTimeRemaining(testEnd)[0];
		document.getElementById("seconds").innerHTML = getTimeRemaining(testEnd)[1];
		document.getElementById("milliseconds").innerHTML = getTimeRemaining(testEnd)[2];
		console.log(getTimeRemaining(testEnd)[2]);
	}, 1);
};

function getEndTime(minutes) {
	var starts = new Date().getTime();
	var time = startTime + (1000 * 60 * minutes);
	var ends = new Date(time);
	return ends;
}

function getTimeRemaining(endTime) {
	var timeArray = [];
	var now = new Date();
	var timeLeft = new Date(endTime - now);
	var timeLeftString = 
	timeArray.push(addZeroBefore(timeLeft.getMinutes(), 2));
	timeArray.push(addZeroBefore(timeLeft.getSeconds(), 2));
	if (timeLeft.getMilliseconds() != 1000) {
		timeArray.push(addZeroBefore(timeLeft.getMilliseconds(), 3));
	} else {
		timeArray.push("999");
	}
	return timeArray;
}

function addZeroBefore(number, amount) {
	if(number < (10**amount) && number > -(10**amount)) {
		number = number.toString();
		var prefix = (10 ** (amount - number.length)) + " ";
		prefix = prefix.slice(1,-1);
		number = prefix + parseInt(number);
	}
	return number;
}