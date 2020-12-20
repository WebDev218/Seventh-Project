const searchResults = document.querySelector('.search-results');
const searchContainer = document.querySelector('.seach-container');


function searchUsers() {
	let userInput = userSearch.value.toLowerCase();
	searchResults.innerHTML = '';
	searchResults.style.display = 'block';

	 for (let i = 0; i < userNames.length ; i++ ) {		 	
	 	if (userNames[i].toLowerCase().includes(userInput)) {					
			let foundUser = document.createElement('P');
			foundUser.classList.add('result');
			foundUser.textContent = userNames[i];

			foundUser.addEventListener('click', (e) => {
				userSearch.value = e.target.textContent;
				closeSearch()
			});			

			searchResults.appendChild(foundUser);
		}
	 }

}

function closeSearch() {	
	searchResults.style.display = 'none';
}

window.addEventListener('click', (e) => {		
		if (e.target !== userSearch) {
			closeSearch();
		}
});

userSearch.addEventListener('keypress', function(e) {
	searchUsers()
});