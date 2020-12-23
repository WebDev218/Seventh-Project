/* ========== Alerts ========== */
const mainAlert = document.querySelector('#main-alert-message');
mainAlert.textContent += "This is an alert message, click the close button to hide it."
let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
	closeButton.parentNode.style.display = 'none';
});


/* === Notifications === */


const note = document.querySelector('.new-notification');
let unread = true;

const modal = document.querySelector(".message-modal");
const closeModal = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");
const messageContainer = document.querySelector('.message-container');


note.parentNode.addEventListener('click', function(e) {
	startModal();	
});

closeModal.addEventListener('click', function(e) {
	messagesRead()
});

modal.addEventListener('click', function(event) {	
	if (event.target == modal) {
		messagesRead()
	}
});

function messagesRead() {
	modal.style.display = "none";
	unread = false;
	note.style.visibility = 'hidden';
}

function startModal() {	
	modal.style.display = "block";
}


function notifyUser(notifications) {
	if (notifications) {
		unread = true;
		note.style.visibility = 'visible';

		for (message in notifications) {
			let newMessage = document.createElement('LI');
			newMessage.classList.add('new-message');
			newMessage.textContent = notifications[message];			
			messageContainer.appendChild(newMessage);
		}
		
		
	}
}
