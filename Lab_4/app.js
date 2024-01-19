alert('Open the console');

// Using Constructor Functions

function Person(fullName, money, sleepMood, healthRate) {
	this.fullName = fullName;
	this.money = money;
	this.sleepMood = sleepMood;
	this.healthRate = healthRate;
	this.sleep = (hours) => {
		if (hours === 7) {
			this.sleepMood = 'Happy';
		} else if (hours < 7) {
			this.sleepMood = 'Tired';
		} else {
			this.sleepMood = 'Lazy';
		}
	};
	this.eat = (meals) => {
		switch (meals) {
			case 1: {
				this.healthRate = 50;
				break;
			}
			case 2: {
				this.healthRate = 75;
				break;
			}
			case 3: {
				this.healthRate = 100;
				break;
			}
			default: {
				this.healthRate = 50;
				break;
			}
		}
	};

	this.buy = () => {
		this.money -= 10;
	};
}

const user = new Person('Ahmed', 1000, 'lazy', 100);

user.sleep(5);
user.eat(2);
user.buy();
user.buy();
user.buy();

console.log('%cUsing Constructor Functions', 'font-size: 2rem; font-weight: bold; color: red');

console.log(user.fullName, user.sleepMood, user.money, user.healthRate);

// Using Classes

class Person2 {
	constructor(fullName, money, sleepMood, healthRate) {
		this.fullName = fullName;
		this.money = money;
		this.sleepMood = sleepMood;
		this.healthRate = healthRate;
	}

	sleep(hours) {
		if (hours === 7) {
			this.sleepMood = 'Happy';
		} else if (hours < 7) {
			this.sleepMood = 'Tired';
		} else {
			this.sleepMood = 'Lazy';
		}
	}

	eat(meals) {
		switch (meals) {
			case 1: {
				this.healthRate = 50;
				break;
			}
			case 2: {
				this.healthRate = 75;
				break;
			}
			case 3: {
				this.healthRate = 100;
				break;
			}
			default: {
				this.healthRate = 50;
				break;
			}
		}
	}

	buy() {
		this.money -= 10;
	}
}

const user2 = new Person2('Ahmed', 1000, 'lazy', 100);

user2.sleep(8);
user2.eat(1);
user2.buy();

console.log('%cUsing Classes', 'font-size: 2rem; font-weight: bold; color: red');

console.log(user2.fullName, user2.sleepMood, user2.money, user2.healthRate);

// Using OLOO

const Person3 = {
	init(fullName, money, sleepMood, healthRate) {
		this.fullName = fullName;
		this.money = money;
		this.sleepMood = sleepMood;
		this.healthRate = healthRate;
		return this;
	},
	sleep(hours) {
		if (hours === 7) {
			this.sleepMood = 'Happy';
		} else if (hours < 7) {
			this.sleepMood = 'Tired';
		} else {
			this.sleepMood = 'Lazy';
		}
	},
	eat(meals) {
		switch (meals) {
			case 1: {
				this.healthRate = 50;
				break;
			}
			case 2: {
				this.healthRate = 75;
				break;
			}
			case 3: {
				this.healthRate = 100;
				break;
			}
			default: {
				this.healthRate = 50;
				break;
			}
		}
	},
	buy() {
		this.money -= 10;
	},
};

const user3 = Object.create(Person3).init('Belal', 500, 'Tired', 25);

user3.sleep(12);
user3.eat(3);
user3.buy();
user3.buy();

console.log('%cUsing OLOO', 'font-size: 2rem; font-weight: bold; color: red');

console.log(user3.fullName, user3.sleepMood, user3.money, user3.healthRate);

// Using Factory Function

function Person4(fullName, money, sleepMood, healthRate) {
	return {
		fullName,
		money,
		sleepMood,
		healthRate,
		sleep(hours) {
			if (hours === 7) {
				this.sleepMood = 'Happy';
			} else if (hours < 7) {
				this.sleepMood = 'Tired';
			} else {
				this.sleepMood = 'Lazy';
			}
		},
		eat(meals) {
			switch (meals) {
				case 1: {
					this.healthRate = 50;
					break;
				}
				case 2: {
					this.healthRate = 75;
					break;
				}
				case 3: {
					this.healthRate = 100;
					break;
				}
				default: {
					this.healthRate = 50;
					break;
				}
			}
		},

		buy() {
			this.money -= 10;
		},
	};
}

const user4 = Person4('Alaa', 350, 'Lazy', 100);

user4.sleep(12);
user4.eat(3);
user4.buy();
user4.buy();

console.log('%cUsing Factory Function', 'font-size: 2rem; font-weight: bold; color: red');

console.log(user4.fullName, user4.sleepMood, user4.money, user4.healthRate);
