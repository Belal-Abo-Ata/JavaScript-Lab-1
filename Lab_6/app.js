// HTML Elements
const output = document.querySelector(`.output`);

// Classes
class Shape {
	constructor(name, sides, sideLength) {
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
	}

	calcPerimeter() {
		let perimeter = 0;
		for (let i = 0; i < this.sides; i++) {
			perimeter += this.sideLength;
		}
		console.log(`The Perimter is: ${perimeter}`);
		return perimeter;
	}
}

class Square extends Shape {
	constructor(sideLength) {
		super('Square From Square', 4, sideLength);
	}
	calcArea() {
		console.log(`The Area is: ${this.sideLength * 4}`);
		return this.sideLength * 4;
	}
}

class Triple {
	static customName = 'Tripler';
	static description = 'I Tripler Any Number You Provide';
	static calculate(n = 1) {
		return n * 3;
	}
}

class SquaredTriple extends Triple {
	static description = 'square the triple of any number you provide';
	static longDescription;
	static calculate(n = 1) {
		return Triple.calculate(n) * Triple.calculate(n);
	}
}

// Object Instance
const squareFromShape = new Shape('Square From Shape', 4, 5);
const squareFromSquare = new Square(10);
const triangle = new Shape('Triangle', 3, 3);

squareFromShape.calcPerimeter();
squareFromSquare.calcPerimeter();
triangle.calcPerimeter();

// Functions

function printMessage(shapes) {
	let message = '';
	for (let shape of shapes) {
		let area = 'calcArea' in shape ? shape.calcArea() : '';
		if (area === '') {
			message += `
                  The ${shape.name} has ${shape.sides} sides and ${shape.sideLength} Side Length
                  and a Perimeter eqaul = ${shape.calcPerimeter()} \n\n
`;
		} else {
			message += `
                  The ${shape.name} has ${shape.sides} sides and ${shape.sideLength} Side Length
                  and a Perimeter eqaul = ${shape.calcPerimeter()} and An Area equal = ${shape.calcArea()} \n\n
`;
		}
	}

	return message;
}

output.innerText = printMessage([squareFromShape, triangle, squareFromSquare]);

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18
console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // Triple
