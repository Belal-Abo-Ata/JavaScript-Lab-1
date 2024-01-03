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

// TODO: do Lab 1 bonus

function sumAndAvg() {
	let nums = prompt('How many numbers?: ');
	// convert num into number
	nums = +nums;

	let message = 'Invlaid number';
	let arr = [];

	// Handle if the user click cancel
	if (nums) {
		// Check if the user enter a valid number
		if (!isNaN(nums)) {
			for (let i = 0; i < nums; ) {
				let num = prompt(`Enter number ${i + 1}`);
				num = +num;
				// Check if the user enter a valid number
				if (!isNaN(num)) {
					arr.push(num);
					i++;
				} else {
					alert(message);
				}
			}
		} else {
			alert(message);
		}

		// calculate the sum & avg
		let sum = arr.reduce((acc, curr) => {
			acc += curr;
			return acc;
		});
		let avg = sum / arr.length;

		// Print the result
		alert(`Sum = ${sum}, Avg = ${avg}`);
	}
}

function book() {
	let contactArr = [];
	do {
		var operation = prompt(
			'Select one operation from the following (add, search) | press cancel to stop'
		);

		// Handle if the user click cancel
		if (operation) {
			// Delete any whitespace (before or after the value) and convert to lowercase
			operation = operation.trim().toLowerCase();

			switch (operation) {
				case 'add': {
					let name = prompt('Enter contact name: ');
					let phone = prompt('Enter phone number');
					// check if the user enter a valid value
					if (name && phone) {
						// create contact obj
						let contactObj = {
							name: name,
							phone: phone,
						};
						// add the obj in the cotact array
						contactArr.push(contactObj);
					} else {
						alert('Invalid name or phone');
					}
					break;
				}
				case 'search': {
					let value = prompt('Enter value: ');
					// check if the user enter a valid value
					if (value) {
						let searchValud = contactArr.find(
							(obj) => obj.name === value || obj.phone === value
						);
						// check if there exist a value or no
						if (searchValud) {
							alert(`Name: ${searchValud.name}, Phone: ${searchValud.phone}`);
						} else {
							alert(`${value} doesn't exist`);
						}
					}
					break;
				}
			}
		}
	} while (operation);
	// Log the contact array
	console.table(contactArr);
}
