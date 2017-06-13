var pomodoroCount = 0
testEnd = new Date(1497378493231);

window.onload = function() {
	var timer = window.setInterval(function() {
		document.getElementById("timer").innerHTML = getTimeRemaining(testEnd);
	}, 1);
};

function getEndTime(minutes) {
	var starts = new Date().getTime();
	var time = startTime + (1000 * 60 * minutes);
	var ends = new Date(time);
	return ends;
}

function getTimeRemaining(endTime) {
	var now = new Date();
	var timeLeft = new Date(endTime - now);
	var timeLeftString = addZeroBefore(timeLeft.getMinutes(), 1) + ":" + addZeroBefore(timeLeft.getSeconds(), 1) + "." + addZeroBefore(timeLeft.getMilliseconds(), 2);
	return timeLeftString
}

function addZeroBefore(number, amount) {
	if(number < (10**amount) && number > -(10**amount)) {
		var prefix = ((10**amount) + " ");
		prefix = prefix.slice(1,-1);
		number = prefix + parseInt(number);
	}
	return number;
}