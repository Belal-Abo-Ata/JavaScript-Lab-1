// Variables & DOM Elments
const setBtn = document.querySelector('.set-btn');
const clearBtn = document.querySelector('.clear-btn');
const hourInput = document.querySelector('.hour-input');
const minuteInput = document.querySelector('.minute-input');
const secondInput = document.querySelector('.second-input');
const message = document.querySelector('.message');
const alarm = document.querySelector('.alarm');

// Function

function clearInputs() {
	hourInput.value = '';
	minuteInput.value = '';
	secondInput.value = '';
	alarm.classList.remove('active');
}

// Check if all inputs have only 2 digits and less than their maximum value
function timeValidation(time) {
	if (
		/^\d{2}$/g.test(time.hour) &&
		time.hour <= 23 &&
		/^\d{2}$/g.test(time.min) &&
		time.min <= 59 &&
		/^\d{2}$/g.test(time.sec) &&
		time.sec <= 59
	) {
		return true;
	} else {
		return false;
	}
}

function setAlarm() {
	const time = {
		hour: hourInput.value,
		min: minuteInput.value,
		sec: secondInput.value,
	};
	// Check if all inputs have only 2 digits and less than their maximum value
	if (timeValidation(time)) {
		// set alarm as active
		alarm.classList.add('active');
		// check for alarm every 1 second
		setInterval(() => {
			if (checkTime(time)) {
				alert('alarm');
				alarm.classList.remove('active');
			}
		}, 1000);
	} else {
		// show the message error
		message.textContent = 'Please Enter a Valid Time (HH:MM:SS)';
		message.classList.add('error');
		message.classList.remove('valid');
		message.classList.remove('hidden');
		// hide the message error after 2 seconds
		setTimeout(() => {
			message.classList.add('hidden');
		}, 2000);
	}
}

function checkTime(time) {
	const date = new Date();
	const hour = date.getHours();
	const min = date.getMinutes();
	const sec = date.getSeconds();
	if (+time.hour === hour && +time.min === min && +time.sec === sec) {
		return true;
	}
}

// EventListner es

clearBtn.addEventListener(`click`, clearInputs);
setBtn.addEventListener(`click`, setAlarm);
