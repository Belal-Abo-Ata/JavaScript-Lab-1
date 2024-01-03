function login() {
	let userName = prompt('Username: ');
	let userPass = prompt('Password: ');
	// Handle if the user click cancel
	if (userName && userPass) {
		// Delete any whitespace (before or after the value)
		userName = userName.trim();
		userPass = userPass.trim();

		let nameValid = false;
		let passValid = false;
		// Validate user name & user password
		userName === 'admin' ? (nameValid = true) : (nameValid = false);
		userPass === '421$$' ? (passValid = true) : (passValid = false);

		let message = 'Welcome login success';
		// create the message
		if (!nameValid) {
			message = `User Name is not valid`;
		}
		if (!passValid) {
			message = `User Password is not valid`;
		}
		if (!nameValid && !passValid) {
			message = `User name & user password are not valid`;
		}
		// print the message
		alert(message);
	}
}

function calc() {
	let firstOperand = prompt('Enter the first number');
	// convert the first Operand into number
	firstOperand = +firstOperand;

	let operation = prompt(
		'Enter one operation from the following (sum,multi,subtract,division,moduls): '
	);
	// Delete any whitespace (before or after the value)
	operation = operation.trim();

	let secondOperand = prompt('Enter the second number');
	// convert the first Operand into number
	secondOperand = +secondOperand;

	let message = '';
	let result = 0;

	// Log all variable
	console.table({
		'First Operand': firstOperand,
		'Second Operand': secondOperand,
		Operation: operation,
	});

	// check if the operands are numbers
	if (isNaN(firstOperand) || isNaN(secondOperand)) {
		message = 'invalid numbers';
	}

	// check if the user enter a valid operation
	switch (operation) {
		case 'sum': {
			result = firstOperand + secondOperand;
			break;
		}
		case 'multi': {
			result = firstOperand * secondOperand;
			break;
		}
		case 'subtract': {
			result = firstOperand - secondOperand;
			break;
		}
		case 'division': {
			result = firstOperand / secondOperand;
			break;
		}
		case 'moduls': {
			result = firstOperand % secondOperand;
			break;
		}
		default: {
			message = 'invalid operation';
		}
	}

	// check if the operation are successfully done
	if (message) {
		alert(message);
	} else {
		alert(`The result is: ${result}`);
	}
}

// TODO: do the bonus
