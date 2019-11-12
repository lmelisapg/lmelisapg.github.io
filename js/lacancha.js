
(function ($) {
  // USE STRICT
  "use strict";

 try {

    // Percent Chart 2
    var ctx = document.getElementById("canales");
    if (ctx) {
      ctx.height = 209;
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: "Canales",
              data: [60, 40],
              backgroundColor: [
                '#00b5e9',
                '#fa4251'
              ],
              hoverBackgroundColor: [
                '#00b5e9',
                '#fa4251'
              ],
              borderWidth: [
                0, 0
              ],
              hoverBorderColor: [
                'transparent',
                'transparent'
              ]
            }
          ],
          labels: [
            'SEO',
            'SEM'
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 87,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              fontSize: 14,
              fontFamily: "Poppins,sans-serif"
            }

          },
          tooltips: {
            titleFontFamily: "Poppins",
            xPadding: 15,
            yPadding: 10,
            caretPadding: 0,
            bodyFontSize: 16,
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }
  
  try {

    //pie chart
    var ctx = document.getElementById("dispositivos");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: [40,50,10],
            backgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.5)",
              "rgba(0,0,0,0.07)"
            ],
            hoverBackgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.5)",
              "rgba(0,0,0,0.07)"
            ]

          }],
          labels: [
            "Desktop",
            "Mobile",
            "Tablet"
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true
        }
      });
    }


  } catch (error) {
    console.log(error);
  }
  
  try {
    //Sales chart
    sesiones(1);


  } catch (error) {
    console.log(error);
  }

  
  

})(jQuery);

function sesiones(opc)
  {
	  var labelss,datas1,datas2;
	  switch(opc)
	  {
		  case 0:
		  labelss=["Nov6", "Nov7", "Nov8", "Nov9", "Nov10", "Nov11", "Nov12"]
		  datas1=[324,927,463,1018,997,215,542];
		  datas2=[28,63,54,87,90,15,42];
		  break;
		  case 1:
		  labelss=["Oct29","Oct30", "Oct31", "Nov1", "Nov2", "Nov3", "Nov4", "Nov5","Nov6", "Nov7", "Nov8", "Nov9", "Nov10", "Nov11", "Nov12"]
		  datas1=[572,210,1005,589,937,1100,269,513,324,927,463,1018,997,215,542];
		  datas2=[55,32,78,62,90,98,13,17,28,63,54,87,90,15,42];
		  default:break;
	  }
	  
	  var ctx = document.getElementById("sesiones");
		if (ctx) {
		  ctx.height = 150;
		  myChartses = new Chart(ctx, {
			type: 'line',
			data: {
			  labels: labelss,
			  type: 'line',
			  defaultFontFamily: 'Poppins',
			  datasets: [{
				label: "Personas",
				data: datas1,
				backgroundColor: 'transparent',
				borderColor: 'rgba(220,53,69,0.75)',
				borderWidth: 3,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgba(220,53,69,0.75)',
			  }, {
				label: "Empresas",
				data: datas2,
				backgroundColor: 'transparent',
				borderColor: 'rgba(40,167,69,0.75)',
				borderWidth: 3,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgba(40,167,69,0.75)',
			  }]
			},
			options: {
			  responsive: true,
			  tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
				titleFontFamily: 'Poppins',
				bodyFontFamily: 'Poppins',
				cornerRadius: 3,
				intersect: false,
			  },
			  legend: {
				display: false,
				labels: {
				  usePointStyle: true,
				  fontFamily: 'Poppins',
				},
			  },
			  scales: {
				xAxes: [{
				  display: true,
				  gridLines: {
					display: false,
					drawBorder: false
				  },
				  scaleLabel: {
					display: false,
					labelString: 'Month'
				  },
				  ticks: {
					fontFamily: "Poppins"
				  }
				}],
				yAxes: [{
				  display: true,
				  gridLines: {
					display: false,
					drawBorder: false
				  },
				  scaleLabel: {
					display: true,
					labelString: 'Value',
					fontFamily: "Poppins"

				  },
				  ticks: {
					fontFamily: "Poppins"
				  }
				}]
			  },
			  title: {
				display: false,
				text: 'Normal Legend'
			  }
			}
		  });
  }}