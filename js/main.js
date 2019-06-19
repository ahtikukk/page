//DOM elements
const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	focus = document.getElementById('focus');

// Show time
function showTime() {
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes();

	// Output time
	time.innerHTML = `${hour}<span>:</span>${min}`;

	setTimeout(showTime, 1000);
}

// Add zeroes
function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greetings

function setBgrGreeting() {
	let today = new Date(),
		hour = today.getHours();

	if (hour < 12) {
		//morning
		document.body.style.backgroundImage = "url('../img/morning.jpg')";
		greeting.textContent = 'Good Morning';
	} else if (hour < 18) {
		//afternoon
		document.body.style.backgroundImage = "url('../img/day.jpg')";
		greeting.textContent = 'Good Afternoon';
	} else {
		//evening
		document.body.style.backgroundImage = "url('../img/night.jpg')";
		greeting.textContent = 'Good Evening';
		document.body.style.color = 'white';
	}
}

// Run
showTime();
setBgrGreeting();
