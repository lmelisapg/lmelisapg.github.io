
(function ($) {
  // USE STRICT
  "use strict";

 try {

    // Percent Chart 2
    var ctx = document.getElementById("canales");
    if (ctx) {
      ctx.height = 195;
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
      ctx.height = 205;
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
    sesiones("0");


  } catch (error) {
    console.log(error);
  }

  try {
    //bar chart
    var ctx = document.getElementById("genero");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'bar',
        defaultFontFamily: 'Poppins',
        data: {
          labels: ["Fútbol", "Basquetball", "Voleyball", "Tenis", "Tejo", "Ultimate"],
          datasets: [
            {
              label: "Masculino",
              data: [65, 60, 50, 40, 80, 55],
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "0",
              backgroundColor: "rgba(0, 123, 255, 0.5)",
              fontFamily: "Poppins"
            },
            {
              label: "Femenino",
              data: [35, 40, 50, 60, 20, 45],
              borderColor: 'rgba(220,53,69,0.75)',
              borderWidth: "0",
              backgroundColor: 'rgba(220,53,69,0.75)',
              fontFamily: "Poppins"
            }
          ]
        },
        options: {
			responsive: true,
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
				stacked: true,
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
				stacked: true,
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }
  
    try {

    // single bar chart
    var ctx = document.getElementById("diashoras");
        if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: [7,14,9,16,18,16,20],
            backgroundColor: [
              "rgba(0, 123, 255,1)",
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.8)",
			  "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.6)",
              "rgba(0, 123, 255,0.5)",
			  "rgba(0, 123, 255,0.4)"
            ],
            hoverBackgroundColor: [
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.6)",
              "rgba(0, 123, 255,0.5)",
			  "rgba(0, 123, 255,0.4)",
              "rgba(0, 123, 255,0.3)",
              "rgba(0, 123, 255,0.2)",
			  "rgba(0, 123, 255,0.1)"
            ]

          }],
          labels: [
            "Lunes",
            "Martes",
            "Miercoles",
			"Jueves",
			"Viernes",
			"Sabado",
			"Domingo"
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

})(jQuery);

function sesiones(opc)
  {
	  var labelss,datas1,datas2;
	  switch(opc)
	  {
		  case "0":
		  labelss=["Nov6", "Nov7", "Nov8", "Nov9", "Nov10", "Nov11", "Nov12"]
		  datas1=[324,927,463,1018,997,215,542];
		  datas2=[28,63,54,87,90,15,42];
		  break;
		  case "1":
		  labelss=["Oct29","Oct30", "Oct31", "Nov1", "Nov2", "Nov3", "Nov4", "Nov5","Nov6", "Nov7", "Nov8", "Nov9", "Nov10", "Nov11", "Nov12"]
		  datas1=[572,210,1005,589,937,1100,269,513,324,927,463,1018,997,215,542];
		  datas2=[55,32,78,62,90,98,13,17,28,63,54,87,90,15,42];
		  break;
		  case "2":
		  labelss=[	"Oct14", "Oct15", "Oct16", "Oct17", "Oct18", "Oct19", "Oct20", "Oct21", "Oct22", "Oct23", "Oct24", "Oct25", "Oct26", "Oct27", "Oct28",
					"Oct29","Oct30", "Oct31", "Nov1", "Nov2", "Nov3", "Nov4", "Nov5","Nov6", "Nov7", "Nov8", "Nov9", "Nov10", "Nov11", "Nov12"]
		  datas1=[471,186,1205,478,914,1083,381,613,424,834,410,800,1050,202,530,572,210,1005,589,937,1100,269,513,324,927,463,1018,997,215,542];
		  datas2=[55,32,78,62,90,98,13,17,28,63,54,87,90,15,42,55,32,78,62,90,98,13,17,28,63,54,87,90,15,42];
		  break;
		  default:break;
	  }
	  
	  var ctx = document.getElementById("sesiones");
		if (ctx) {
		  ctx.height = 205;
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