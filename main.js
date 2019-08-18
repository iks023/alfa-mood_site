(function($) {
    'use strict';
    $(function() {
    
      Chart.defaults.global.legend.labels.usePointStyle = true;
      
      if ($("datapick").length) {
const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let date = new Date();
let day1 = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day1;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
	}
}

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function populateDates (e) {
	days_element.innerHTML = '';
	let amount_days = 31;

	if (month == 1) {
		amount_days = 28;
	}

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			populateDates();
		});

		days_element.appendChild(day_element);
	}
}

// HELPER FUNCTIONS
function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
function formatDate (d) {
	let day1 = d.getDate();
	if (day1 < 10) {
		day1 = '0' + day1;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();
    let m=selectedMonth;
    return  months[m]+' ' + day1 +' ' + year;
    
}
    var day =(moment().format('ddd MMM DD YYYY'));
    console.log(moment().format('ddd MMM DD YYYY'));
    ////////////////////////////////////////////////////////////////////////////////
    console.log(selected_date_element.textContent);
    var dayreal = selected_date_element.textContent;
    console.log(dayreal);
    ///////////////////////////////Настроение сотрудников///////////////////////////
        firebase.database().ref(dayreal).child("Bad").on('value', function(ss) {
            var x2 = ss.val();
            console.log(x2);
            firebase.database().ref(dayreal).child("Medium").on('value',function(ss1){
              var x3 = ss1.val();
              
              firebase.database().ref(dayreal).child("Good").on('value',function(ss2){
              var x1 = ss2.val();
              var ctx =document.getElementById("chart");
              var myChart= new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Плохое", "Среднее", "Хорошее"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#F53134", "#D6DB32","#67ED42"],
              data: [x2,x3,x1]
            }
          ]
        },
        options: {
          title: {
            display: true,
          }
        }
    });
});
     });
     });
    }
    });
})(jQuery);