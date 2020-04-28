var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var STATUS_WORKING = "working";
var STATUS_RESTING = "resting";

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var status = STATUS_WORKING;

var isDebug = true;
function dbg(msg, obj) {
  if (isDebug) {
    if (obj) {
      console.log(msg, obj);
    } else {
      console.log(msg);
    }
  }
}

function initializeTimer() {
  var minutes = "";

  if (status === STATUS_WORKING) {
    minutes = workMinutesInput.value.trim();
  } else {
    minutes = restMinutesInput.value.trim();
  }
  clearInterval(interval);
  totalSeconds = minutes * 60;
}

function handlePlayButton(event) {
  dbg("Play button clicked");
  startTimer();
}

function handlePauseButton(event) {
  dbg("Pause button clicked");
  pauseTimer();
}

function handleStopButton(event) {
  dbg("Stop button clicked");
  stopTimer();
}

function handleStatusToggle(event) {
  dbg("Status toggle clicked");
  toggleStatus(event.target.checked);
  dbg("Status", status);
}

function handleTick(event) {
  dbg("tick");
  secondsElapsed++;
  renderTime();
}

function startTimer() {
  dbg("Starting timer");
  initializeTimer();
  if (totalSeconds > 0) {
    interval = setInterval(handleTick, 1000);
  } else {
    alert("Must be a positive value");
  }
}

function pauseTimer() {
  dbg("Pausing timer");
  clearInterval(interval);
  dbg("Interval", interval);
  renderTime();
}

function stopTimer() {
  dbg("Stopping  timer");
  clearInterval(interval);
  secondsElapsed = 0;
  initializeTimer();
  renderTime();
}

function toggleStatus(state) {
  if (state) {
    status = "working";
  } else {
    status = "resting";
  }
}

function renderTime() {
  minutesDisplay.textContent = renderMinutes();
  secondsDisplay.textContent = renderSeconds();

  if (totalSeconds <= secondsElapsed) {
    if (status === STATUS_WORKING) {
      alert("Time for a break");
    } else {
      alert("Time to get back to work!");
    }
    stopTimer();
  }
}

function renderMinutes() {
  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;

  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

function renderSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

playButton.addEventListener("click", handlePlayButton);
pauseButton.addEventListener("click", handlePauseButton);
stopButton.addEventListener("click", handleStopButton);
statusToggle.addEventListener("click", handleStatusToggle);
