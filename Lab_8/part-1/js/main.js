// Variables & DOM Elments
const sliderItems = Array.from(document.querySelectorAll('.slider-item'));
const sliderNavigators = Array.from(document.querySelectorAll('.slider-navigator span'));
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let position = 0;

// Functions

function setSlider() {
	// Get the slider items length
	let sliderLength = sliderItems.length;
	let next = position + 1;
	let prev = position - 1;
	const firstHalf = [];
	const secondHalf = [];

	// Make the current item in the front
	sliderItems[position].classList.add('front');

	// Divide the slider items into 2 halfs one on the rigth and the other on the left
	for (let i = 0; i < sliderLength / 2; i++) {
		next = next >= sliderLength ? 0 : next;
		prev = prev < 0 ? sliderLength - 1 : prev;
		firstHalf.push(sliderItems[next]);
		next === prev ? '' : secondHalf.push(sliderItems[prev]);
		next++;
		prev--;
	}

	// Increase the first half by 120% from the left
	firstHalf.forEach((el, index) => {
		el.style.cssText = `
        left: ${(index + 1) * 20 + 100}%;
        z-index: ${firstHalf.length - index};
    `;

		el.classList.remove('front');
	});

	// Decrease the second half by 20% from the left

	secondHalf.forEach((el, index) => {
		el.style.cssText = `
        left: -${(index + 1) * 20}%;
        z-index: ${firstHalf.length - index}    `;
		el.classList.remove('front');
	});
}

function setIndicator() {
	sliderNavigators.forEach((el, index) => {
		if (index !== position) {
			el.classList.remove('active');
		} else {
			el.classList.add('active');
		}
	});
}

// Function to handler the arrow buttons
function changeItem(type) {
	type === 'increase' ? position++ : position--;
	if (position >= sliderItems.length) {
		position = 0;
	} else if (position < 0) {
		position = sliderItems.length - 1;
	}

	setSlider();
	setIndicator();
}

setSlider();
setIndicator();

// EventListners

leftBtn.addEventListener('click', () => {
	changeItem('decrease');
});
rightBtn.addEventListener('click', () => {
	changeItem('increase');
});

sliderNavigators.forEach((el, index) => {
	el.addEventListener(`click`, () => {
		position = index;
		setSlider();
		setIndicator();
	});
});
