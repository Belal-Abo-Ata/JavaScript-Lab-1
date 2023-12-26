// First Question

let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
confirm(`is your name ${firstName} ${lastName}`);
let birthYear = prompt('Enter your birth year');
const AGE = 2023 - birthYear;

let greeting = document.querySelector('.greeting');
greeting.textContent = `Welcom ${firstName} ${lastName} your age is ${AGE}`;

// Second Question

alert(
  ' that it’s the first release of a calculator that only has a summation feature.'
);

let firstNumber = prompt('Enter the first number');
let secondNumber = prompt('Enter the second number');

let calculator = document.querySelector('.calculator');
calculator.textContent = `${firstNumber} + ${secondNumber} = ${
  Number(firstNumber) + Number(secondNumber)
}`;
