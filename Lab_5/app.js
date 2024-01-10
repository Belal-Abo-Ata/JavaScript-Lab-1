const empDiv = document.querySelector(`.emp`);
// Using Classes

class Person {
  #healthRate;
  constructor(fullName, money, sleepMood) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
  }

  sleep(sleepTime) {
    if (sleepTime === 7) {
      this.sleepMood = 'Happy';
    } else if (sleepTime < 7) {
      this.sleepMood = 'Tired';
    } else {
      this.sleepMood = 'Lazy';
    }
  }

  get healthRate() {
    return this.#healthRate;
  }

  set healthRate(healthRate) {
    this.#healthRate = +healthRate;
    if (0 > this.#healthRate || this.#healthRate > 100) {
      console.log('healthRate must be between 0 and 100');
      console.log('healthRate will by 50');
      this.#healthRate = 50;
    }

  }

  eat(meals) {
    switch (meals) {
      case 1: {
        this.#healthRate = 50;
        break;
      }
      case 2: {
        this.#healthRate = 75;
        break;
      }
      case 3: {
        this.#healthRate = 100;
        break;
      }
      default: {
        this.#healthRate = 50;
        break;
      }
    }
  }






  buy() {
    this.money -= 10;
  }
}


class Employee extends Person {
  static empNumber = 0;
  #salary = 1000;

  constructor(fullName, money, sleepMood, email, workMood, isManager) {
    super(fullName, money, sleepMood);
    this.email = email;
    this.workMood = workMood;
    this.isManager = isManager;
    this.id = ++Employee.empNumber;
  }

  get salary() {
    return this.#salary;
  }

  set salary(salary) {
    this.#salary = salary;
    if (this.#salary < 1000) {
      console.log('Salary must be 1000 or more');
      console.log('Salary will by 1000');
      this.#salary = 1000;
    }

  }

  work(workTime) {
    if (workTime === 7) {
      this.mood = 'Happy';
    } else if (workTime < 7) {
      this.mood = 'Tired';
    } else {
      this.mood = 'Lazy';
    }
  }

}


class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployee(empID) {
    for (const emp of this.employees) {
      if (emp.id === empID) {
        if (emp.isManager === true) {
           alert(`Full Name: ${emp.fullName}
          Money: ${emp.money}
          Sleep Mood: ${emp.sleepMood}
          Health Rate: ${emp.healthRate}
          ID: ${emp.id}
          Email: ${emp.email}
          Work Mood: ${emp.workMood}`);
        } else {
          alert(`Full Name: ${emp.fullName}
          Money: ${emp.money}
          Sleep Mood: ${emp.sleepMood}
          Health Rate: ${emp.healthRate}
          ID: ${emp.id}
          Email: ${emp.email}
          Work Mood: ${emp.workMood}
          Salary: ${emp.salary}`);
        }
        return emp;
      }
    }
  }

  hire(emp) {
    this.employees = [...this.employees, emp];
  }

  fire(empID) {
    this.employees = this.employees.filter(emp => emp.id !== empID);
  }
}


function checkValue(value, type, expectedValue = []) {
  let retVal = true;

  if (value === '' || value === undefined || value === null || Number.isNaN(value)) {
    return false;
  }

  if (expectedValue.length > 0) {
    return expectedValue.includes(value) ? true : false;
  }


  switch (type) {
    case 'number': {
      value = +value;
      if (typeof value !== 'number' || Number.isNaN(value)) {
        retVal = false;
      }
      break;
    }
    case 'boolean': {
      if (typeof value !== 'boolean') {
        retVal = false;
      }
      break;
    }
    case 'string': {
      if (typeof value !== 'string') {
        retVal = false;
      }
    }
  }

  return retVal;
}

function promptMenu(type, expectedValue, promptMessage, errorMessage) {
  let numberOfPrompts = 0;
  do {
    const opt = prompt(promptMessage);
    var isValid = checkValue(opt, type, expectedValue);


    if (!isValid) {
      alert(errorMessage);
      numberOfPrompts++;
    } else {
      return opt;
    }

    if (numberOfPrompts > 3) {
      empDiv.textContent = `Program finished unsuccessfully`;
      return undefined;
    }

  } while (!isValid);

}

function addEmp() {
  const fullName = promptMenu('string', [], 'Enter Full Name: ', 'Invalid Name');
  const money = +promptMenu('number', [], 'Enter Money: ', 'Invalid Money');
  const sleepMood = promptMenu('string', ['Happy', 'Tired', 'Lazy'], 'Enter Sleep Mood(Happy, Tired, Lazy): ', 'Invalid Sleep Mood');
  const email = promptMenu('string', [], 'Enter Email: ', 'Invalid email');
  const workMood = promptMenu('string', ['Happy', 'Tired', 'Lazy'], 'Enter Work Mood(Happy, Tired, Lazy): ', 'Invalid Sleep Mood');
  let isManager = promptMenu('string', ['mngr', 'nrml'], 'Enter Manager or Normal Employee (mngr, nrml): ', 'Invalid Value');
  const healthRate = +promptMenu('number', [], 'Enter Health Rate: ', 'Invalid Health Rate');
  const salary = promptMenu('number', [], 'Enter Salary : ', 'Invalid Salary');
  isManager = isManager === 'mngr' ? true : false;
  const emp = new Employee(fullName, money, sleepMood, email, workMood, isManager);
  emp.healthRate = healthRate;
  emp.salary = salary;
  sales.hire(emp);
}

function fireEmp() {
  const empID = +promptMenu('number', [], 'Enter Emp ID', 'Invalid ID');
  sales.fire(empID);
}


function searchEmp() {
  const empID = +promptMenu('number', [], 'Enter Emp ID', 'Invalid ID');
  return sales.getEmployee(empID);
}

function printAllEmp() {
  emps = sales.getAllEmployees();
  for (emp of emps) {
      sales.getEmployee(emp.id);
  }
}

const sales = new Office('Sales', []);

do {


var exit = true;

const opt = promptMenu('string', ['add', 'remove', 'search', 'print', 'q'], `
  Enter one of the following operations
  add: to hire an employee,
  remove: to fire an employee,
  search: to get an employee data by his / her ID,
  print: to print all employees data,
  q: to exit the program
`, 'Invalid Option');

switch (opt) {
  case 'add': {
    addEmp();
    break;
  } case 'remove': {
    fireEmp();
    break;
  } case 'search': {
    searchEmp();
    break;
  } case 'print': {
    printAllEmp()
    break;
  } case 'q': {
      exit = false;
      break;
  }
}

} while (exit);


// Testing
function testing() {

  console.log(checkValue('Belal', 'string'))
  console.log(checkValue('Belal', 'string', ['Belal', 'ahmed']));
  console.log(checkValue('as', 'string', ['Belal', 'ahmed']));
  console.log(checkValue('Belal', 'number'))
  console.log(checkValue(123, 'number'))
  console.log(checkValue(true, 'boolean'))
  console.log(checkValue('bel', 'boolean'))

}
