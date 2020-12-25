/* Variables */
const settingsButtons = document.querySelectorAll('#settings .button');
const timezoneSelect = document.querySelector('.time-zone');
const emailToggle = document.querySelector('.send-email input');
const publicToggle = document.querySelector('.set-public input');

/*This is the message if no local storage is available, and the redirect if they want to enable it*/
const noLocalStorage = 'Local Storage disabled. Click OK to view information on enabling Local Storage.';
const redirect = 'https://voicethread.com/howto/enabling-cookies/';

let sendEmail;
let profilePublic;
let timezone;

/* The template to be used for local storage */
let settingsConfig = `{"settings":{"sendEmail":"true","profilePublic":"","timezone":"Select timezone"}}`;

/**
* Add event listeners to the Save and Cancel Buttons
*/
for (let i = 0; i < settingsButtons.length; i++) {	
	settingsButtons[i].addEventListener('click', (e)=> {		
		if (settingsButtons[i].textContent === "Save") {
			saveSettings();
		} else if (settingsButtons[i].textContent === "Cancel") {
			loadSettings();
		}
	});
}

/**
* Check if local Storage is available
* {@RETURN} Boolean, true if it is available, false if not
*/
function checkLocalStorage() {
	try {
		return 'localStorage' in window && window.localStorage !== null;
	} catch (e) {
		return false;
	}
}

/**
* Modify the local storage string and save it. Provide a message to the user if it is not available.
* The not available message should only be presented here to avoid being intrusive
*/
function saveSettings() {
	if (checkLocalStorage()) {
		settingsConfig = `{"settings":{"sendEmail":"${emailToggle.checked}","profilePublic":"${publicToggle.checked}","timezone":"${timezoneSelect.selectedIndex}"}}`
		localStorage.setItem('settings', settingsConfig);	
	} else {
		if (window.confirm(noLocalStorage)) {
			window.location.href = redirect;
		};
		// alert(noLocalStorage);
	}
}

/**
* To revert any changes the user has made since the last save. Pressing this should either load the last saved settings
* or it should set everything to defaul if there is no localStorage
*/
function loadSettings() {
	if (checkLocalStorage()) {
		let timeZoneList = ['Select a timezone', 'EST', 'CST', 'MST', 'PST'];
		let loaded = JSON.parse(localStorage.getItem('settings'));

		function toggleCheck(pageToggle, loadedStatus) {				
			if (pageToggle.checked != loadedStatus) {
				pageToggle.click();
			}
		}		
		toggleCheck(emailToggle, loaded.settings.sendEmail === 'true');
		toggleCheck(publicToggle, loaded.settings.profilePublic === 'true');
		timezoneSelect.selectedIndex = loaded.settings.timezone;
	} else {
		emailToggle.checked = false;
		publicToggle.checked = false;
		timezoneSelect.selectedIndex = 0;
	}
}