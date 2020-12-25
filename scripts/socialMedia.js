const socialHits = document.querySelectorAll('.social-hits');

/**
* To load data from storage regarding social media hits, and add it to the right card.
* If no data is present add '--' instead
* Data should be supplied in this order [Facebook, Twitter, Google+]
*/
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

