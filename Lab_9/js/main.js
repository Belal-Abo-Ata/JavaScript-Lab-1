// Variables & DOM Elments

const form = document.querySelector(`form`);
const userName = document.querySelector('.username');
const userPass = document.querySelector('.userpass');
const submitBtn = document.querySelector('.submit-btn');
const userMessage = document.querySelector('.user-message');
const small = document.querySelector('.small');
const capital = document.querySelector('.capital');
const digit = document.querySelector('.digits');
const eight = document.querySelector('.eight');

// Functions

// Function to validate the user name
function validateUserName(element) {
	// regular expression for validating the user name
	// couldn't be empty or start with digit or special character
	const regex = /^[a-zA-Z][\w|_]*/g;
	return regex.test(element.value.trim());
}

// Function to validate the user pass
function validateUserPassword(element) {
	// const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/g;
	const text = element.value.trim();
	const smallValid = /[a-z]+/g.test(text);
	const capitalValid = /[A-Z]+/g.test(text);
	const digitValid = /[1-9]+/g.test(text);
	const eightValid = /.{8,}/g.test(text);

	return [smallValid, capitalValid, digitValid, eightValid];
}

// Function to change the input message
function changeMessage(element, type, message) {
	element.classList.add('hidden');
	let icon, className;

	if (type === 'valid') {
		className = 'valid-message';
		icon = `<i class="fa-solid fa-check"></i>`;
	} else {
		className = 'error-message';
		icon = `<i class="fa-solid fa-xmark"></i>`;
	}

	element.classList.remove('valid-message');
	element.classList.remove('error-message');
	element.classList.remove('hidden');
	element.classList.add(className);
	element.innerHTML = `
    ${icon}
    <p>${message}</p>
`;
}

// EventListners

form.addEventListener(`submit`, (e) => {
	const userNameValid = validateUserName(userName);
	const userPassValid = validateUserPassword(userPass).every((el) => el === true);

	if (!userNameValid || !userPassValid) {
		e.preventDefault();
	}
});

userName.addEventListener('input', (e) => {
	const valid = validateUserName(e.target);
	if (valid) {
		changeMessage(userMessage, 'valid', 'Starts With letter');
	} else {
		changeMessage(userMessage, 'error', 'Starts With letter');
	}
});

userPass.addEventListener('input', (e) => {
	const [smallValid, capitalValid, digitValid, eightValid] = validateUserPassword(e.target);
	smallValid
		? changeMessage(small, 'valid', 'Include small letter')
		: changeMessage(small, 'error', 'Include small letter');
	capitalValid
		? changeMessage(capital, 'valid', 'Include capital letter')
		: changeMessage(capital, 'error', 'Include capital letter');
	digitValid
		? changeMessage(digit, 'valid', 'Include digit letter')
		: changeMessage(digit, 'error', 'Include digit letter');
	eightValid
		? changeMessage(eight, 'valid', 'At Least 8 digits')
		: changeMessage(eight, 'error', 'At Least 8 digits');
});
