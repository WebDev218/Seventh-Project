const searchResults = document.querySelector('.search-results');
const searchContainer = document.querySelector('.seach-container');

let userNames = [];

/**
* The search function has to be populated with the names of all active users fro the allUsers object .name property
* no params are required as long as this script is loaded after the allUser object is declared
*/
function populateSearch() {
	for (i in allUsers) {
		userNames.push(allUsers[i].name);
	}
}

/**
* Identify text entered by the user in the Message User section, seach for matching user names and generate an 
* HTML drop down list to be appended to the search box. Styling to be kept consistent with the page.
* The search results need to be cleared every time the function is called to prevent duplication.
* The element appended to the seach results should be a P tag with teh class .result
*/
function searchUsers() {
	let userInput = userSearch.value.toLowerCase();
	searchResults.innerHTML = '';
	searchResults.style.display = 'block';

	 for (let i = 0; i < userNames.length ; i++ ) {		 	
	 	if (userNames[i].toLowerCase().includes(userInput)) {
			let foundUser = constructElement('P', userNames[i], ['result']);

			foundUser.addEventListener('click', (e) => {
				userSearch.value = e.target.textContent;
				closeSearch()
			});			

			searchResults.appendChild(foundUser);
		}
	 }

}

/**
* Make closing the seach pop up accessible anywhere. Currently this only has one line of code, but had more
* during development, and I kept it in as it may require more code later
*/
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