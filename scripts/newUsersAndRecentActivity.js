/* ========== Users ========== */

class user {
	contructor() {
		this.name,
		this.email,
		this.joined,
		this.lastActive,
		this.profilePic,
		this.lastAction,
		this.id
	}
}


const newMembers = document.querySelector('#members');
const recentActivity = document.querySelector('#recent-activity');

let allUsers = [];


// let asd = allUsers.find(function(user) {return user.id === '123'});
// console.log(asd);

function populateUsers(users) {
	if (users.length > 0) {
		for (let i = 0; i < users.length; i++) {
			let newUser = new user;
			newUser.name = users[i][0];
			newUser.email = users[i][1];
			newUser.joined = users[i][2];
			newUser.lastActive = users[i][3];
			newUser.profilePic = users[i][4];
			newUser.lastAction = users[i][5];
			newUser.id = users[i][6];
			allUsers.push(newUser);
		}
		allUsers.reverse(function(a, b) {
			return new Date(a.joined) - new Date(b.joined);
		})

		for (let i = 0; i < 4; i++) {
			createNewMemberCard(allUsers[i]);
		}

		allUsers.reverse(function(a, b) {
			return new Date(a.lastActive) - new Date(b.lastActive);
		})

		for (let i = 0; i < 4; i++) {
			createRecentActivityCard(allUsers[i]);
		}
	}
}

function createNewMemberCard(member) {
	let userCard = document.createElement('DIV');
	let userImage = document.createElement('IMG');
	let userName = document.createElement('P');
	let userEmail = document.createElement('A')
	let userJoin = document.createElement('P');
	
	userCard.className = 'member user-card';
	userImage.src = `images/${member.profilePic}`;
	userName.textContent = member.name;
	userEmail.textContent = member.email;
	userEmail.href = `mailto:${member.email}`;
	userJoin.textContent = `Joined: ${member.joined}`;

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
	recentImage.src = `images/${user.profilePic}`;
	recentName.textContent = `${user.name} ${user.lastAction}`;	
	lastActive.textContent = `Active: ${new Date().getDate() - new Date(user.lastActive).getDate()} day(s) ago.`;

	recentCard.appendChild(recentImage);
	recentCard.appendChild(recentName);
	recentCard.appendChild(lastActive);

	recentActivity.appendChild(recentCard);

}