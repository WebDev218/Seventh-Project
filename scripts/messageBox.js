/* ========== MEssage box ========== */

const sendButton = document.querySelector('.button.send');
const userSearch = document.querySelector('.user-search');
const userMessage = document.querySelector('.user-message-contents');


sendButton.addEventListener('click', function(event) {
	event.preventDefault()
	if (!userSearch.value && !userSearch.classList.contains('error')) {
		userSearch.className +=  ' error';		
	}
	if (!userMessage.value && !userMessage.classList.contains('error')) {
		userMessage.className +=  ' error';		
	}


	if (!userSearch.value && !userMessage.value) {
		alert('Please fill out the user and message fields before sending.')
	} else if (!userMessage.value) {
		alert('Please fill out the message field.'); 
	} else if (!userSearch.value) {
		alert('Please fill out the user field.')
	} else {
		alert(`Message sent to ${userSearch.value}`)
	}
});

function removeError(event) {
	if (event.target.classList.contains('error')) {
		event.target.classList.remove('error');
	}
}



userMessage.addEventListener('keypress', (event) => {removeError(event)});
userSearch.addEventListener('keypress', (event) => {removeError(event)});







