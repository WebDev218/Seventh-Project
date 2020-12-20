const socialHits = document.querySelectorAll('.social-hits');

function populateSocialCards(data=[0,0,0]) {	
	let socialName;
	for (let i = 0; i<3; i++) {
		socialName = socialHits[i].previousElementSibling.textContent;
		if (data[i] > 0) {
			socialHits[i].textContent = data[i].toLocaleString('en');
		} else {
			socialHits[i].textContent = '--';
			console.log('No data for ' + socialName);
		}
	}
}

