// Ex1:

do {
	var age = prompt('Enter Your Age');
	age = +age;
	// Validate the user input (positive numbers only)
	if (age > 0) {
		let status = '';
		// Get the status
		if (1 <= age && age <= 10) {
			status = 'Child';
		} else if (11 <= age && age <= 18) {
			status = 'Teenager';
		} else if (19 <= age && age <= 50) {
			status = 'Grown';
		} else {
			status = 'Old';
		}
		// Print the status in the console & body
		console.log(`Your Status is ${status}`);
		let ageDiv = document.querySelector(`.age`);
		ageDiv.textContent = `Your Status is ${status}`;
	}
} while (age);

// Ex2:

let str = prompt('Enter a String');
str === null ? (str = '') : '';
// convert that string into lower cases
str = str.toLowerCase();
let vowelCount = 0;

// loop of the string
for (ch of str) {
	// check if there any vowels
	if (ch === 'a' || ch === 'e' || ch === 'o' || ch === 'u' || ch === 'i') {
		vowelCount++;
	}
}

// Print the vowel count in the console & body
console.log(`Number of Vowels is ${vowelCount}`);
let vowelDiv = document.querySelector(`.vowel`);
vowelDiv.textContent = `Number of Vowels is ${vowelCount}`;

// Ex3

function convertTime(hour) {
	// Check whether the time is pm or am (0-11 & 24 => am | 12-23 => pm)
	let period = 11 < hour && hour <= 23 ? 'PM' : 'AM';
	// Make the time back to 12 format (13-23 => 1-11 pm | 24 => 12 am)
	if (hour > 12 || hour == 0) {
		hour = Math.abs(hour - 12);
	}
	// Print to the console
	console.log(`hour is: ${hour}${period}`);
}

let hours = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
	22, 23, 24,
];

// Test the convertTime function over all possible values (0-24)
for (hour of hours) {
	convertTime(hour);
}
