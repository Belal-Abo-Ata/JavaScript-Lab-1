document.addEventListener('DOMContentLoaded', getTodoApp);

// Variables & DOM Elments

const taskName = document.querySelector(`.task-name`);
const addBtn = document.querySelector(`.add-btn`);
const todoContainer = document.querySelector(`.todo-container`);
const doneBtns = document.getElementsByClassName('done-btn');
const deleteBtns = document.getElementsByClassName('delete-btn');

// ID to identify the todo task for delete & done action
let id = 1;

// Program

// Observer to watch for any change in the todo container DOM
// if any change happed the mutation function will be run
const observer = new MutationObserver(mutation);

// watch changes in attributes, child elements, and in child's DOM tree
observer.observe(todoContainer, { attributes: true, childList: true, subtree: true });

// Function

function getTodoApp() {
	const todoApp = localStorage.getItem('todoApp');
	if (todoApp) {
		todoContainer.innerHTML = JSON.parse(todoApp);
	}
}

function mutation() {
	// When a change happen in task container
	// event listener will be add to all done btn
	// to add the class done when click it

	// make an array to iterate on it
	Array.from(doneBtns).forEach((el) => {
		// add event listener for every btn
		el.addEventListener('click', (e) => {
			// search for todo task div
			let parentEl = e.target;
			do {
				parentEl = parentEl.parentElement;
			} while (!parentEl.classList.contains('todo-task'));
			// add class done
			parentEl.classList.add('done');
			// When add done to any task copy all the tasks container's content into the local storage
			localStorage.setItem('todoApp', JSON.stringify(todoContainer.innerHTML));
		});
	});

	// When a change happen in task container
	// event listener will be add to all done btn
	// to run the removeTodoTask function done when click it

	// make an array to iterate on it
	Array.from(deleteBtns).forEach((el) => {
		// add event listener for every btn
		el.addEventListener('click', (e) => {
			// search for todo task div
			let parentEl = e.target;
			do {
				parentEl = parentEl.parentElement;
			} while (!parentEl.classList.contains('todo-task'));
			// run removeTodoTask function
			// and pass to it the id of clicked todo-task div
			removeTodoTask(parentEl.dataset.id);
		});
	});
}

function addTodoTask(message) {
	// todo task template
	const todoTask = `
	<div class="todo-task" data-id=${id}>
				<p class="task-text">${message}</p>
				<div class="btn-container">
					<button type="button" class="done-btn">
						<i class="fa-solid fa-square-check"></i>
					</button>
					<button type="button" class="delete-btn">
						<i class="fa-solid fa-square-xmark"></i>
					</button>
				</div>

`;

	// insert task
	todoContainer.insertAdjacentHTML('beforeend', todoTask);
	// When adding any task copy all the tasks container's content into the local storage
	localStorage.setItem('todoApp', JSON.stringify(todoContainer.innerHTML));
	id++;
}

// remove element with id
function removeTodoTask(id) {
	// iterate on all todo-task divs
	const todoTasks = Array.from(document.querySelectorAll(`.todo-task`));
	todoTasks.forEach((el) => {
		// if any div has the same id that was passed as an arugment
		// add the hidden class to make a nice transition
		// then wait 1 second and remove it
		// NOTE: if the element removed directly no transition will by displaed
		if (el.dataset.id === id) {
			el.classList.add('hidden');
			setTimeout(() => {
				el.remove();
			}, 1000);
		}
	});

	// When removing any task copy all the tasks container's content into the local storage
	localStorage.setItem('todoApp', JSON.stringify(todoContainer.innerHTML));
}

// EventListners

addBtn.addEventListener('click', () => {
	taskName.value.length > 0 ? addTodoTask(taskName.value) : '';
});
