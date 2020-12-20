/* User Name - Email address - Join Date - Last Active Date - Profile Pic - last activity - ID numbery*/
let appUsers = [
	['Victoria Chambers', 'victoria.chambers80@example.com', '12/10/20', '12/14/2020', 'member-1.jpg', 'commented on Your App', '123'],
	['Dale Byrd', 'dale.byrd52@example.com', '12/10/20', '12/13/2020', 'member-2.jpg', 'commented on Your App', '456'],
	['Dawn Wood', 'dawn.wood@example.com', '12/10/20', '12/12/2020', 'member-3.jpg', 'commented on Your App', '789'],
	['Dan Oliver', 'dan.oliver82@example.com', '12/11/20', '12/11/2020', 'member-4.jpg', 'Joined Your App', '321']
];

let userId = '123';
populateUsers(appUsers)
let currentUser = '123';


monthlyTraffic = [["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
	"4-10", "11-17", "18-24", "25-31"],
	[750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
	2500]];
weeklyTraffic = [["18-29", "12-18", "3-52", "61-19", "43-22", "12-22", "27-3",
	"4-13", "16-17", "19-24", "27-51"],
	[1250, 1000, 1000, 2000, 2500, 1750, 350, 1850, 1250, 1500,
	900]];
dailyTraffic = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	[120, 90, 380, 200, 250, 170, 35,]];
hourlyTraffic = [["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
	"15:00", "16:00", "17:00", "18:00"],
	[12, 28, 30, 20, 15, 17, 3, 18, 15, 34,
	9]];

updateChart('Weekly', trafficPeriods[2]);



let activeNotifications = ['Your first unread notification', 'Your second unread notification'];


//This order: Facebook Twitter Google+
let socialData = [10345, 8739, 2530];
populateSocialCards(socialData);
notifyUser(activeNotifications);

// Added for search box
let userNames = [];
for (i in allUsers) {
	userNames.push(allUsers[i].name);
}

loadSettings();