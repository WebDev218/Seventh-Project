/* ========== Users ========== */

// const user = {
// 	name : '',
// 	email: '',
// 	joined: '',
// 	lastActive: ''
// }

// // let users = [
// // 	['Victoria Chambers', 'victoria.chambers80@example.com', '12/10/20', '12/14/2020', 'member-1.jpg', 'commented on Your App'],
// // 	['Dale Byrd', 'dale.byrd52@example.com', '12/10/20', '12/13/2020', 'member-2.jpg', 'commented on Your App'],
// // 	['Dawn Wood', 'dawn.wood@example.com', '12/10/20', '12/12/2020', 'member-3.jpg', 'commented on Your App'],
// // 	['Dan Oliver', 'dan.oliver82@example.com', '12/11/20', '12/11/2020', 'member-4.jpg', 'Joined Your App']
// // ];
const newMembers = document.querySelector('#members');
const recentActivity = document.querySelector('#recent-activity');



function populateUsers(e) {
	console.log(e);
}

if (users.length > 0) {
	users.reverse(function(a, b) {
			return new Date(a[2]) - new Date(b[2]);
		})
	for (let i = 0; i < 4; i++) {
		createNewMemberCard(users[i]);
	}
	users.reverse(function(a, b) {
			return new Date(a[3]) - new Date(b[3]);
		})
	for (let i = 0; i < 4; i++) {
		createRecentActivityCard(users[i]);
	}
}



function createNewMemberCard(member) {
	let userCard = document.createElement('DIV');
	let userImage = document.createElement('IMG');
	let userName = document.createElement('P');
	let userEmail = document.createElement('A')
	let userJoin = document.createElement('P');

	userCard.className = 'member user-card';
	userImage.src = `images/${member[4]}`;
	userName.textContent = member[0];
	userEmail.textContent = member[1];
	userEmail.href = `mailto:${member[1]}`;
	userJoin.textContent = `Joined: ${member[2]}`;

	userCard.appendChild(userImage);
	userCard.appendChild(userName);
	userCard.appendChild(userEmail);
	userCard.appendChild(userJoin);

	newMembers.appendChild(userCard);
}

function createRecentActivityCard(user) {
	let recentCard = document.createElement('DIV');
	let recentImage = document.createElement('IMG');
	let recentName = document.createElement('P');
	let lastActive = document.createElement('P');

	recentCard.className = 'activity user-card';
	recentImage.src = `images/${user[4]}`;
	recentName.textContent = `${user[0]} ${user[5]}`;	
	lastActive.textContent = `${new Date() - new Date(user[3])}`;

	recentCard.appendChild(recentImage);
	recentCard.appendChild(recentName);
	recentCard.appendChild(lastActive);

	recentActivity.appendChild(recentCard);

}