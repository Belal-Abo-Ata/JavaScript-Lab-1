// Variables & DOM Elments
const url = 'https://dummyjson.com/users';
const loadingPlaceholder = document.querySelector(`.section-title`);
const container = document.querySelector(`.container`);
// Function

async function getData() {
	const response = await fetch(url);
	try {
		const data = await response.json();
		if (!data) {
			throw new Error('There is an error happend while fetching the data');
		}
		hideLoadingPlacholder();
		displayUsers(data);
	} catch (e) {
		console.log(e);
	}
}

async function displayUsers(data) {
	const newData = await data;
	const usersData = newData.users.map(({ image: img, email: userEmail }) => {
		return { img, userEmail };
	});
	const users = usersData
		.map(({ img, userEmail }) => {
			return `
     <article class='card'>
       <img src="${img}" alt='person' />
         <h4>${userEmail}</h4>
     </article>
     `;
		})
		.join('');
	container.innerHTML = users;
}

// Hide Placeholder Loading
function hideLoadingPlacholder() {
	const heading = loadingPlaceholder.querySelector(`h1`);
	heading.textContent = 'Users Info';
}

// EventListners

window.addEventListener(`load`, getData);
