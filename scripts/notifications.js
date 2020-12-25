let unread = true;
const note = document.querySelector('.new-notification');

/* ========== Main-alert ========== */
const mainAlert = document.querySelector('#main-alert-message');
mainAlert.textContent += "This is an alert message, click the close button to hide it.";
let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
	closeButton.parentNode.style.display = 'none';
});


/* === Notification Modal === */
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

/**
* Set the notification modal to be vissible
*/
function startModal() {	
	modal.style.display = "block";
}


/* ========== Notifcations ========== */




/**
* To trigger once a user has read any unread notifcations. Hide the modal, and to remove the notication icon (green circle) and animation
*/
function messagesRead() {
	modal.style.display = "none";
	unread = false;	
	note.style.visibility = 'hidden';
	note.parentNode.style.animation = 'none';
}




/**
* to take an array of notifications and populate the notification modal, and show the icon
* {@PARAM} An array of strings to be displayed as notifcations
*/
function notifyUser(notifications) {
	if (notifications) {
		unread = true;
		note.style.visibility = 'visible';		
		
		for (message in notifications) {			
			let newMessage = constructElement('LI', notifications[message], 'new-message');			
			messageContainer.appendChild(newMessage);
		}
		
		
	}
}
