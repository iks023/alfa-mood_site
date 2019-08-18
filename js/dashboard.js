
var today =(moment().format('ddd MMM DD YYYY'));
console.log(today, typeof today, 'today');
var today2 =(moment().subtract(1, 'weak').subtract(1,'day').format('ddd MMM DD YYYY'));
var today3 =(moment().subtract(2, 'weak').subtract(2,'day').format('ddd MMM DD YYYY'));
var today4 =(moment().subtract(3, 'weak').subtract(3,'day').format('ddd MMM DD YYYY'));
var today5 =(moment().subtract(4, 'weak').subtract(4,'day').format('ddd MMM DD YYYY'));
var today6 =(moment().subtract(5, 'weak').subtract(5,'day').format('ddd MMM DD YYYY'));
var today7 =(moment().subtract(6, 'weak').subtract(6,'day').format('ddd MMM DD YYYY'));

var day = (moment().format('ddd DD'));
var day2=(moment().subtract(1, 'weak').subtract(1,'day').format('ddd DD'));
var day3=(moment().subtract(2, 'weak').subtract(2,'day').format('ddd DD'));
var day4=(moment().subtract(3, 'weak').subtract(3,'day').format('ddd DD'));
var day5=(moment().subtract(4, 'weak').subtract(4,'day').format('ddd DD'));
var day6=(moment().subtract(5, 'weak').subtract(5,'day').format('ddd DD'));
var day7=(moment().subtract(6, 'weak').subtract(6,'day').format('ddd DD'));


(function($) {
  'use strict';
  $(function() {
  
    Chart.defaults.global.legend.labels.usePointStyle = true;
    
    if ($("#serviceSaleProgress").length) {
      var bar = new ProgressBar.Circle(serviceSaleProgress, {
        color: 'url(#gradient)',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 8,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 6 },
        to: { color: '#57c7d4', width: 6 }
      });

      bar.animate(.65);  // Number from 0.0 to 1.0
      bar.path.style.strokeLinecap = 'round';
      let linearGradient = '<defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="20%" stop-color="#da8cff"/><stop offset="50%" stop-color="#9a55ff"/></linearGradient></defs>';
      bar.svg.insertAdjacentHTML('afterBegin', linearGradient);
    }
    if ($("#productSaleProgress").length) {
      var bar = new ProgressBar.Circle(productSaleProgress, {
        color: 'url(#productGradient)',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 8,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 6 },
        to: { color: '#57c7d4', width: 6 }
      });

      bar.animate(.6);  // Number from 0.0 to 1.0
      bar.path.style.strokeLinecap = 'round';
      let linearGradient = '<defs><linearGradient id="productGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="40%" stop-color="#36d7e8"/><stop offset="70%" stop-color="#b194fa"/></linearGradient></defs>';
      bar.svg.insertAdjacentHTML('afterBegin', linearGradient);
    }
    if ($("#points-chart").length) {
      var ctx = document.getElementById('points-chart').getContext("2d");

      var gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);
      gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
      gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');

      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: [1, 2, 3, 4, 5, 6, 7, 8],
              datasets: [
                {
                  label: "North Zone",
                  borderColor: gradientStrokeViolet,
                  backgroundColor: gradientStrokeViolet,
                  hoverBackgroundColor: gradientStrokeViolet,
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 1,
                  //fill: 'origin',
                  data: [20, 40, 15, 35, 25, 50, 30, 20]
                },
                {
                  label: "South Zone",
                  borderColor: '#e9eaee',
                  backgroundColor: '#e9eaee',
                  hoverBackgroundColor: '#e9eaee',
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 1,
                  //fill: 'origin',
                  data: [40, 30, 20, 10, 50, 15, 35, 20]
                }
            ]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          display: false,
                          min: 0,
                          stepSize: 10
                      },
                      gridLines: {
                        drawBorder: false,
                        display: false
                      }
                  }],
                  xAxes: [{
                      gridLines: {
                        display:false,
                        drawBorder: false,
                        color: 'rgba(0,0,0,1)',
                        zeroLineColor: '#eeeeee'
                      },
                      ticks: {
                          padding: 20,
                          fontColor: "#9c9fa6",
                          autoSkip: true,
                      },
                      barPercentage: 0.7
                  }]
                }
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            })
    }
    if ($("#events-chart").length) {
      var ctx = document.getElementById('events-chart').getContext("2d");

      var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 181);
      gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
      gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');

      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: [1, 2, 3, 4, 5, 6, 7, 8],
              datasets: [
                {
                  label: "Domestic",
                  borderColor: gradientStrokeBlue,
                  backgroundColor: gradientStrokeBlue,
                  hoverBackgroundColor: gradientStrokeBlue,
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 1,
                  //fill: 'origin',
                  data: [20, 40, 15, 35, 25, 50, 30, 20]
                },
                {
                  label: "International",
                  borderColor: '#e9eaee',
                  backgroundColor: '#e9eaee',
                  hoverBackgroundColor: '#e9eaee',
                  pointRadius: 0,
                  fill: false,
                  borderWidth: 1,
                  //fill: 'origin',
                  data: [40, 30, 20, 10, 50, 15, 35, 20]
                }
            ]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          display: false,
                          min: 0,
                          stepSize: 10
                      },
                      gridLines: {
                        drawBorder: false,
                        display: false
                      }
                  }],
                  xAxes: [{
                      gridLines: {
                        display:false,
                        drawBorder: false,
                        color: 'rgba(0,0,0,1)',
                        zeroLineColor: '#eeeeee'
                      },
                      ticks: {
                          padding: 20,
                          fontColor: "#9c9fa6",
                          autoSkip: true,
                      },
                      barPercentage: 0.7
                  }]
                }
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            })
    }
    
    
    firebase.database().ref(today).child("Bad").on('value', function(ss) {
      var bad1=ss.val();
    firebase.database().ref(today).child("Medium").on('value', function(ss) {
      var medium1=ss.val();
    firebase.database().ref(today).child("Good").on('value', function(ss) {
      var good1=ss.val();
      
    firebase.database().ref(today2).child("Bad").on('value', function(ss) {
      var bad2=ss.val();
    firebase.database().ref(today2).child("Medium").on('value', function(ss) {
      var medium2=ss.val();
    firebase.database().ref(today2).child("Good").on('value', function(ss) {
      var good2=ss.val();
      firebase.database().ref(today3).child("Bad").on('value', function(ss) {
        var bad3=ss.val();
      firebase.database().ref(today3).child("Medium").on('value', function(ss) {
        var medium3=ss.val();
      firebase.database().ref(today3).child("Good").on('value', function(ss) {
        var good3=ss.val();
        firebase.database().ref(today4).child("Bad").on('value', function(ss) {
          var bad4=ss.val();
        firebase.database().ref(today4).child("Medium").on('value', function(ss) {
          var medium4=ss.val();
        firebase.database().ref(today4).child("Good").on('value', function(ss) {
          var good4=ss.val();
          firebase.database().ref(today5).child("Bad").on('value', function(ss) {
            var bad5=ss.val();
          firebase.database().ref(today5).child("Medium").on('value', function(ss) {
            var medium5=ss.val();
          firebase.database().ref(today5).child("Good").on('value', function(ss) {
            var good5=ss.val();
            firebase.database().ref(today6).child("Bad").on('value', function(ss) {
              var bad6=ss.val();
            firebase.database().ref(today6).child("Medium").on('value', function(ss) {
              var medium6=ss.val();
            firebase.database().ref(today6).child("Good").on('value', function(ss) {
              var good6=ss.val();
              firebase.database().ref(today7).child("Bad").on('value', function(ss) {
                var bad7=ss.val();
              firebase.database().ref(today7).child("Medium").on('value', function(ss) {
                var medium7=ss.val();
              firebase.database().ref(today7).child("Good").on('value', function(ss) {
                var good7=ss.val();
    if ($("#visit-sale-chart").length) {
      Chart.defaults.global.legend.labels.usePointStyle = true;
      var ctx = document.getElementById('visit-sale-chart').getContext("2d");
      var gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);  
      gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
      gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
      var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';
      
      var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
      gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
      gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
      var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
      gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
      var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [day7, day6, day5, day4, day3, day2,day],
            datasets: [
              {
                label: "Хорошее",
                borderColor: gradientStrokeViolet,
                backgroundColor: gradientStrokeViolet,
                hoverBackgroundColor: gradientStrokeViolet,
                legendColor: gradientLegendViolet,
                pointRadius: 0,
                fill: false,
                borderWidth: 1,
                fill: 'origin',
                data: [good7, good6, good5, good4, good3, good2, good1]
              },
              {
                label: "Среднее",
                borderColor: gradientStrokeRed,
                backgroundColor: gradientStrokeRed,
                hoverBackgroundColor: gradientStrokeRed,
                legendColor: gradientLegendRed,
                pointRadius: 0,
                fill: false,
                borderWidth: 1,
                fill: 'origin',
                data: [medium7, medium6, medium5, medium4, medium3, medium2, medium1]
              },
              {
                label: "Плохое ",
                borderColor: gradientStrokeBlue,
                backgroundColor: gradientStrokeBlue,
                hoverBackgroundColor: gradientStrokeBlue,
                legendColor: gradientLegendBlue,
                pointRadius: 0,
                fill: false,
                borderWidth: 1,
                fill: 'origin',
                data: [bad7, bad6, bad5, bad4, bad3, bad2,bad1]
              }
          ]
        },
        options: {
          responsive: true,
          legend: false,
          legendCallback: function(chart) {
            var text = []; 
            text.push('<ul>'); 
            for (var i = 0; i < chart.data.datasets.length; i++) { 
                text.push('<li><span class="legend-dots" style="background:' + 
                           chart.data.datasets[i].legendColor + 
                           '"></span>'); 
                if (chart.data.datasets[i].label) { 
                    text.push(chart.data.datasets[i].label); 
                } 
                text.push('</li>'); 
            } 
            text.push('</ul>'); 
            return text.join('');
          },
          scales: {
              yAxes: [{
                  ticks: {
                      display: false,
                      min: 0,
                      stepSize: 20,
                      max: 100
                  },
                  gridLines: {
                    drawBorder: false,
                    color: 'rgba(235,237,242,1)',
                    zeroLineColor: 'rgba(235,237,242,1)'
                  }
              }],
              xAxes: [{
                  gridLines: {
                    display:false,
                    drawBorder: false,
                    color: 'rgba(0,0,0,1)',
                    zeroLineColor: 'rgba(235,237,242,1)'
                  },
                  ticks: {
                      padding: 20,
                      fontColor: "#9c9fa6",
                      autoSkip: true,
                  },
                  categoryPercentage: 0.5,
                  barPercentage: 0.5
              }]
            }
          },
          elements: {
            point: {
              radius: 0
            }
          }
      })
      $("#visit-sale-chart-legend").html(myChart.generateLegend());
}
var dataGood = {
  labels: [day6, day5, day4, day3, day2, today],
  datasets: [{
    label: '# of Votes',
    data: [good6,good5, good4, good3, good2, good1],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
    fill: false
  }]
};
var dataMedium = {
  labels: [day6, day5, day4, day3, day2, today],
  datasets: [{
    label: '# of Votes',
    data: [ medium6, medium5, medium4, medium3, medium2, medium1],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
    fill: false
  }]
};
var dataBad = {
  labels: [day6, day5, day4, day3, day2, today],
  datasets: [{
    label: '# of Votes',
    data: [ bad6, bad5, bad4, bad3, bad2,bad1],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
    fill: false
  }]
};
var dataComments = {
  labels: [day6, day5, day4, day3, day2, today],
  datasets: [{
    label: '# of Votes',
    data: [ bad6, bad5, bad4, bad3, bad2,bad1],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
    fill: false
  }]
};
var multiLineData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: [
        '#587ce4'
      ],
      borderWidth: 2,
      fill: false
    },
    {
      label: 'Dataset 2',
      data: [5, 23, 7, 12, 42, 23],
      borderColor: [
        '#ede190'
      ],
      borderWidth: 2,
      fill: false
    },
    {
      label: 'Dataset 3',
      data: [15, 10, 21, 32, 12, 33],
      borderColor: [
        '#f44252'
      ],
      borderWidth: 2,
      fill: false
    }
  ]
};
var options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  }

};
var doughnutPieData = {
  datasets: [{
    data: [30, 70, 30],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Pink',
    'Blue1',
    'Yellow',
  ]
};
var doughnutPieOptions = {
  responsive: true,
  animation: {
    animateScale: true,
    animateRotate: true
  }
};
var areaData = {
  labels: ["2013", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
    fill: true, // 3: no fill
  }]
};

var areaOptions = {
  plugins: {
    filler: {
      propagate: true
    }
  }
}

var multiAreaData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
      label: 'Facebook',
      data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
      borderColor: ['rgba(255, 99, 132, 0.5)'],
      backgroundColor: ['rgba(255, 99, 132, 0.5)'],
      borderWidth: 1,
      fill: true
    },
    {
      label: 'Twitter',
      data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
      borderColor: ['rgba(54, 162, 235, 0.5)'],
      backgroundColor: ['rgba(54, 162, 235, 0.5)'],
      borderWidth: 1,
      fill: true
    },
    {
      label: 'Linkedin',
      data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
      borderColor: ['rgba(255, 206, 86, 0.5)'],
      backgroundColor: ['rgba(255, 206, 86, 0.5)'],
      borderWidth: 1,
      fill: true
    }
  ]
};

var multiAreaOptions = {
  plugins: {
    filler: {
      propagate: true
    }
  },
  elements: {
    point: {
      radius: 0
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
}

var scatterChartData = {
  datasets: [{
      label: 'First Dataset',
      data: [{
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: 3
        },
        {
          x: -25,
          y: 5
        },
        {
          x: 40,
          y: 5
        }
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Second Dataset',
      data: [{
          x: 10,
          y: 5
        },
        {
          x: 20,
          y: -30
        },
        {
          x: -25,
          y: 15
        },
        {
          x: -10,
          y: 5
        }
      ],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }
  ]
}

var scatterChartOptions = {
  scales: {
    xAxes: [{
      type: 'linear',
      position: 'bottom'
    }]
  }
}
// Get context with jQuery - using jQuery's .get() method.
if ($("#barChart").length) {
  var barChartCanvas = $("#barChart").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: dataComments,
    options: options
  });
}

if ($("#lineChart").length) {
  var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
  var lineChart = new Chart(lineChartCanvas, {
    type: 'line',
    data: dataGood,
    options: options
  });
}
if ($("#lineChartMedium").length) {
  var lineChartCanvasMedium = $("#lineChartMedium").get(0).getContext("2d");
  var lineChartMedium = new Chart(lineChartCanvasMedium, {
    type: 'line',
    data: dataMedium,
    options: options
  });
}
if ($("#lineChartBad").length) {
  var lineChartCanvasBad = $("#lineChartBad").get(0).getContext("2d");
  var lineChartBad = new Chart(lineChartCanvasBad, {
    type: 'line',
    data: dataBad,
    options: options
  });
}

if ($("#linechart-multi").length) {
  var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
  var lineChart = new Chart(multiLineCanvas, {
    type: 'line',
    data: multiLineData,
    options: options
  });
}

if ($("#areachart-multi").length) {
  var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
  var multiAreaChart = new Chart(multiAreaCanvas, {
    type: 'line',
    data: multiAreaData,
    options: multiAreaOptions
  });
}

if ($("#doughnutChart").length) {
  var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
  var doughnutChart = new Chart(doughnutChartCanvas, {
    type: 'doughnut',
    data: doughnutPieData,
    options: doughnutPieOptions
  });
}

if ($("#pieChart").length) {
  var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
  var pieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: doughnutPieData,
    options: doughnutPieOptions
  });
}

if ($("#areaChart").length) {
  var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
  var areaChart = new Chart(areaChartCanvas, {
    type: 'line',
    data: areaData,
    options: areaOptions
  });
}

if ($("#scatterChart").length) {
  var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
  var scatterChart = new Chart(scatterChartCanvas, {
    type: 'scatter',
    data: scatterChartData,
    options: scatterChartOptions
  });
}

if ($("#browserTrafficChart").length) {
  var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
  var doughnutChart = new Chart(doughnutChartCanvas, {
    type: 'doughnut',
    data: browserTrafficData,
    options: doughnutPieOptions
  });
}
});
});
}); 
        });
        });
      });
    });
    });
  });
    });
    });
  });
  });
  });
  });
  });
});
});
});
});
});
    if ($("#traffic-chart").length) { 
      
      /*const dbRefObject=firebase.database().ref().child('Tue Aug 06 2019');
      var dbRefObject3 = dbRefObject.child('Bad').once('value', function(ss) {  
        a = ss.val();
        var bad = document.getElementById('object').innerText;
        console.log('Check aaaafter assignment is ' + a);
      });
      console.log('Check after assignment is ' + a); 



      var dbRefObject=firebase.database().ref().child('Tue Aug 06 2019');
      var dbRefObject3 = dbRefObject.child('Bad');
    
      dbRefObject3.on('value',snap => preObject.innerText = snap.val());*/
    
       

            
      var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 181);
      gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
      gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
      var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 50);
      gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
      gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
      var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

      var gradientStrokeGreen = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
      gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
      var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';      
      console.log(dbRefObject3);  
      var trafficChartData =  {
        datasets: [{
          data: [30,32,3],
          backgroundColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed
          ],
          hoverBackgroundColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed
          ],
          borderColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed
          ],
          legendColor: [
            gradientLegendBlue,
            gradientLegendGreen,
            gradientLegendRed
          ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Среднее',
          'Хорошее',
          'Плохое',
        ]
      };
      var trafficChartOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: false,
        legendCallback: function(chart) {
          var text = []; 
          text.push('<ul>'); 
          for (var i = 0; i < trafficChartData.datasets[0].data.length; i++) { 
              text.push('<li><span class="legend-dots" style="background:' + 
              trafficChartData.datasets[0].legendColor[i] + 
                          '"></span>'); 
              if (trafficChartData.labels[i]) { 
                  text.push(trafficChartData.labels[i]); 
              }
              text.push('<span class="float-right">'+trafficChartData.datasets[0].data[i]+"%"+'</span>')
              text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join('');
        }
      };
      var trafficChartCanvas = $("#traffic-chart").get(0).getContext("2d");
      var trafficChart = new Chart(trafficChartCanvas, {
        type: 'doughnut',
        data: trafficChartData,
        options: trafficChartOptions
      });
      $("#traffic-chart-legend").html(trafficChart.generateLegend());      
    }
    if ($("#inline-datepicker").length) {
      $('#inline-datepicker').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
      });
    }
  });
})(jQuery);

