/* ========== Users ========== */
/* Purpose: to generate an object for each user containing their unique information. 
To use that information to generate 'cards' containing the most recent members and 
the most recent activity shown in a identically sized format
*/

/* ===== Variables and objects ===== */

class user {
	/* Create a template for the user to be instatiated for each user */
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


/*===== functions ===== */
/**
* To be called in script.js upon page load.
* To create a new object for each user in memory, and use those objects to pass data into the createNewMemberCard
* and createRecentActivityCard functions
* {@PARAM} a 2d array containing all users and their data. In this format: 
* [[User Name, Email address, Join Date, Last Active Date, Profile Pic, last activity, ID number]]
*/
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

		/* 
		These functions take a list of allUsers, which contains each user object and only exists to be reordered
		It then sorts them into the most recently added, and the most recently active, and sends the first 4 of each
		to generate the appropriate card.
		Each function must preceed the corresponding for loop
		*/
		allUsers.reverse(function(a, b) {
			return new Date(a.joined) - new Date(b.joined);
		})
		for (let i = 0; i < 4; i++) {			
			newMembers.appendChild(createNewMemberCard(allUsers[i]))
		}

		allUsers.reverse(function(a, b) {
			return new Date(a.lastActive) - new Date(b.lastActive);
		})
		for (let i = 0; i < 4; i++) {			
			recentActivity.appendChild(createRecentActivityCard(allUsers[i]));
		}
	}
}

/**
* Generate a new member card using the supplied user object
* {@PARAM} An object representing a user
* {@RETURN} a completed HTML User card with appropriate content and classes. Format below:
*<div class="member user-card">
*	<img src="images/'Profile Pic'">
*	<p>'User Name'</p>
*	<a class="" href="mailto:'email Address'">'email Address'</a>
*	<p>'Join Date'</p>
*</div>
*/
function createNewMemberCard(member) {		
	let userImage = constructElement('IMG', '', '', 'src',`images/${member.profilePic}`);
	let userName = constructElement('P', member.name);
	let userEmail = constructElement('A', member.email, [], 'href', `mailto:${member.email}`);
	let userJoin = constructElement('P', `Joined: ${member.joined}`);
	let userCard = constructElement('DIV', '', ['member', 'user-card'], '', '', [userImage, userName, userEmail, userJoin]);

	return userCard;
}


/**
* Generate a new recent activity card using the supplied user object
* {@PARAM} An object representing a user
* {@RETURN} a completed HTML User card with appropriate content and classes. Format below:
*<div class="activity user-card">
*	<img src="images/'profile pic'">
*	<p>'User name'</p>
*	<p>Active: 'Last Active' day(s) ago.</p>
*</div>
*/
function createRecentActivityCard(user) {	
	let recentImage = constructElement('IMG', '', '', 'src', `images/${user.profilePic}`);
	let recentName = constructElement('P', `${user.name} ${user.lastAction}`);
	let lastActive = constructElement('P', `Active: ${new Date().getDate() - new Date(user.lastActive).getDate()} day(s) ago.`);
	let recentCard = constructElement('DIV', '', ['activity', 'user-card'], '', '', [recentImage, recentName, lastActive]);

	return recentCard;
}