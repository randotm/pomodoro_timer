var pomodoroCount = 0
testEnd = new Date(1497378493231);
var timer;
var cycleCount = 0;
var tim;

window.onload = function() {
	$("start").click();
};

function getEndTime(minutes) {
	var starts = new Date().getTime();
	var time = starts + (1000 * 60 * minutes);
	var ends = new Date(time);
	return ends;
}

function getTimeRemaining(endTime) {
	var timeArray = [];
	var now = new Date();
	var timeLeft = new Date(endTime - now);
	var minutes = addZeroBefore(timeLeft.getMinutes(), 2);
	var seconds = addZeroBefore(timeLeft.getSeconds(), 2);
	var milliseconds = addZeroBefore(timeLeft.getMilliseconds(), 3);

	timeArray.push(minutes);
	timeArray.push(seconds);
	timeArray.push(milliseconds);
	if (timeLeft.getTime() < 50) {
		return null;
	}
	return timeArray;
}

function pomodoro() {
	var pomodoroEnd = getEndTime(25);
	$("#start").css("visibility", "hidden")
	$("#task").css("visibility", "visible")
	$("#timeLeft").css("visibility", "visible")
	$("#task").html("Get to work!");
	timer = window.setInterval(function() {
		if (getTimeRemaining(pomodoroEnd) != null) {
			if (getTimeRemaining(pomodoroEnd) != null) {
				$("#minutes").html(getTimeRemaining(pomodoroEnd)[0]);
			}
			if (getTimeRemaining(pomodoroEnd) != null) {
				$("#seconds").html(getTimeRemaining(pomodoroEnd)[1]);
			}
			if (getTimeRemaining(pomodoroEnd) != null) {
				$("#milliseconds").html(getTimeRemaining(pomodoroEnd)[2]);
			}
		} else {
			clearInterval(timer);
			pomodoro_break();
		}
	}, 1);
	cycleCount += 1;
}

function pomodoro_break() {
	if (cycleCount % 4 != 0) {
		var breakEnd = getEndTime(5);
	} else {
		var breakEnd = getEndTime(15);
	}
	$("#task").html("Take a break!");
	timer = window.setInterval(function() {
		if (getTimeRemaining(breakEnd) != null) {
			if (getTimeRemaining(breakEnd) != null) {
				$("#minutes").html(getTimeRemaining(breakEnd)[0]);
			}
			if (getTimeRemaining(breakEnd) != null) {
				$("#seconds").html(getTimeRemaining(breakEnd)[1]);
			}
			if (getTimeRemaining(breakEnd) != null) {
				$("#milliseconds").html(getTimeRemaining(breakEnd)[2]);
			}
		} else {
			clearInterval(timer);
			pomodoro();
		}
	}, 1);
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