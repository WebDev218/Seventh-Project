const settingsButtons = document.querySelectorAll('#settings .button');
const timezoneSelect = document.querySelector('.time-zone');
const emailToggle = document.querySelector('.send-email input');
const publicToggle = document.querySelector('.set-public input');

let sendEmail;
let profilePublic;
let timezone;



for (let i = 0; i < settingsButtons.length; i++) {	
	settingsButtons[i].addEventListener('click', (e)=> {		
		if (settingsButtons[i].textContent === "Save") {
			saveSettings();
		} else if (settingsButtons[i].textContent === "Cancel") {
			loadSettings();
		}
	});
}






let settingsConfig = `{"settings":{"sendEmail":"true","profilePublic":"","timezone":"Select timezone"}}`;

function saveSettings() {
	settingsConfig = `{"settings":{"sendEmail":"${emailToggle.checked}","profilePublic":"${publicToggle.checked}","timezone":"${timezoneSelect.selectedIndex}"}}`
	localStorage.setItem('settings', settingsConfig);	
}

function cancelSettings() {

}



function loadSettings() {
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
}

console.log(JSON.parse(localStorage.getItem('settings')));