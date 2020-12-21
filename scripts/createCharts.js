/* ========== chart widget ========== */
const trafficCanvas = document.getElementById('traffic-canvas').getContext('2d');
const trafficPeriods = document.querySelectorAll('.traffic-period');

let monthlyTraffic = [];
let weeklyTraffic =  [];
let dailyTraffic =  [];
let hourlyTraffic =  [];


function createChart(canvas, type, data, options) {
	let newChart = new Chart(canvas, {
		type: type,
		data: data,
		options: options
	});
	return newChart;
}

function updateChart(period, element) {
	function updatePeriodSelection() {
		for (let i = 0;i< trafficPeriods.length;i++) {
			trafficPeriods[i].classList.remove('highlighted');
		}
		element.classList.add('highlighted');
	}

	if (period === 'Monthly') {
		trafficData.labels = monthlyTraffic[0];
		trafficChart.data.datasets[0].data = monthlyTraffic[1];
	} else if (period === 'Weekly') {
		trafficData.labels = weeklyTraffic[0];
		trafficChart.data.datasets[0].data = weeklyTraffic[1];
	} else if (period === 'Daily') {
		trafficData.labels = dailyTraffic[0];
		trafficChart.data.datasets[0].data = dailyTraffic[1];
	}  else if (period === 'Hourly') {
		trafficData.labels = hourlyTraffic[0];
		trafficChart.data.datasets[0].data = hourlyTraffic[1];
	}

	updatePeriodSelection()
	trafficChart.update();
}


for (let i = 0;i< trafficPeriods.length;i++) {
	trafficPeriods[i].addEventListener('click', () => {
		let periodSelected = trafficPeriods[i];
		periodSelected.classList.add('highlighted');
		updateChart(periodSelected.textContent, periodSelected); 
	});

}







/* Traffic chart */ 
let trafficData = {
	labels: monthlyTraffic[0],	
	datasets: [{
	data: monthlyTraffic[1],	
	backgroundColor: 'rgba(116, 119, 191, .3)',	
	borderWidth: 2,
	showLine: true,
	lineTension: 0,
	borderColor: 'rgba(130, 125, 200, .8)',
	pointRadius: 8,
	pointBackgroundColor: 'rgba(255, 255, 255, .5)',
	pointBorderColor: 'rgba(130, 125, 200, .8)'

	}]
};

let trafficOptions = {
	aspectRatio: 2.5,
	responsive: true,
	animation: {duration: 0},
	scales: {yAxes: [{ticks: {beginAtZero:true}}]},
	legend: {display: false}
};



/* Bar Graph */

const dailyCanvas = document.getElementById("traffic-daily-canvas");

const dailyData = {
	labels: ["S", "M", "T", "W", "T", "F", "S"],
	datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1
	}]
};
const dailyOptions = {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero:true
			}
		}]
	},
	legend : {
		display: false
	}
};



/* mmmmm Doughnut */

const mobileCanvas = document.getElementById("mobile-users-canvas");
const mobileData = {
	labels: ["Desktop", "Tablet", "Phones"],
	datasets: [{
		label: '# of Users',
		data: [2000, 550, 500],
		borderWidth: 0,
		backgroundColor: [
			'#7477BF',
			'#78CF82',
			'#51B6C8'
		]
	}]
};

const mobileOptions = {
	legend: {
		position: 'right',
		labels: {
			boxWidth: 20,
			fontStyle: 'bold'
		}
	}
};


/* Create Graphs here */

/* Argument order: Canvas, chart type, chart data, chart options*/
let trafficChart = createChart(trafficCanvas, 'line', trafficData, trafficOptions);
let dailyChart = createChart(dailyCanvas, 'bar', dailyData, dailyOptions);
let mobileChart = createChart(mobileCanvas, 'doughnut', mobileData, mobileOptions);


