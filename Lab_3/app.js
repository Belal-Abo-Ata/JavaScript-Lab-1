// Part 1

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

// Part 2

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

// TODO: do Lab 2 bonus

// Part 3

let obj = {
	name: 'Ahmed',
	age: 19,
};

// Ex 1:

// Object.assign()  copies all enumerable own properties from one or more source objects to a target object
let obj2 = {};
Object.assign(obj2, obj);
console.log(obj2); // Object { name: "Ahmed", age: 19 }

// hasOwnProperty() => check if an object has a key
console.log(obj.hasOwnProperty('name')); // true

// Object.entries() returns an array of a given object's own key-value pairs
console.log(Object.entries(obj));

// Object.keys() returns an array of a given object's own property names
console.log(Object.keys(obj));

// Object.values returns an array of a given object's own property values.
console.log(Object.values(obj));

// Object.getPrototypeOf() returns the prototype
console.log(Object.getPrototypeOf(obj));

// Object.is()  determines whether two values are the same value.
console.log(Object.is(obj, obj), Object.is(obj, obj2));

// isPrototypeOf() checks if this object exists in another object's prototype chain.
console.log(obj.isPrototypeOf(Object));

// Object.getOwnPropertyNames() returns an array of all properties  directly in a given object.
console.log(Object.getOwnPropertyNames(obj));

//Object.fromEntries() transforms a list of key-value pairs into an object
console.log(
	Object.fromEntries([
		['name', 'Belal'],
		['age', 23],
	])
);

// Ex 2:

let arr = ['AlAhly', 'ElZamalek', 'Pyramids', 'Enpi'];

// at()  takes an integer value and returns the item at that index, allowing for positive and negative integers.
// Negative integers count back from the last item in the array.
console.log(arr.at(-1));

// contact() contact two arrays together into a new array
console.log(arr.concat(arr));

// slice(start, end) return a part of an array as an array
console.log(arr.slice(0, 3));

// splice(start, end, [...replacment]) cut a portation of an array and can replace it
console.log(arr.splice(0, 2, 'Ismaily', 'ElIttihad'));
console.log(arr);

// join([seprator]) join an array into string
console.log(arr.join(' '));

// sort() sort an array
console.log(arr.sort());

// reverse() reverse an array

console.log(arr.reverse());

// pop() remove the last element in an array
console.log(arr.pop());
console.log(arr);

// push(value) add a value at the end of an array
console.log(arr.push('Modern Future'));
console.log(arr);

// shift() remove the first element in an array
console.log(arr.shift());
console.log(arr);

// unshift(value) add a value at the begining of an array
console.log(arr.unshift('AlMasry'));
console.log(arr);

/* 
A closure in JavaScript is created when a function is defined within another function
allowing the inner function to access variables from the outer (enclosing) function's scope. The key concept that makes closures work is the preservation of the lexical scope, 
meaning that the inner function "remembers" the scope in which it was created.
*/

function parentFun() {
	let val = 'ITI';
	function childFun() {
		console.log(val);
	}
	childFun();
}

parentFun();
