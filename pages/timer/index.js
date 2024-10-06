let time = 0;
let timer;

function updateTimer() {
	time += 1;
	document.getElementById("timer").innerText = time;
}

function startTimer() {
	if (!timer) {
		timer = setInterval(updateTimer, 1000); // Update every 1 second
	}
}

function stopTimer() {
	clearInterval(timer);
	timer = null; // Reset the timer variable to null
}
