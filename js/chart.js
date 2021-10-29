function Chart1() {
    var options = {
        series: [{
                name: 'series2',
                data: [1200, 1400, 1900, 2300, 2800, 2500],
                zIndex: 2
            }, {
                name: 'series1',
                data: [1600, 2000, 2500, 3200, 4000, 2500],
                zIndex: 1
            },

        ],
        chart: {
            height: 350,
            type: 'area',
            fontFamily: 'Roboto, sans-serif',
            foreColor: '#A2A3A5',
            // stacked: false,
            toolbar: {
                show: false
            },
        },
        colors: ['#E9E7F1', '#5273e2'],
        // fill: {
        //     colors: ['#5273e2', '#ECE9F1'],
        //     opacity: [0.1, 0.9],
        // },
        fill: {
            type: ["solid", "gradient"],
            // colors: ['#5273e2', '#ECE9F1'],
            gradient: {
                // shade: 'dark',
                type: "horizontal",
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.3,
                opacityTo: 0.01,
                stops: [0, 30, 50, 90, 141]
            },
            opacity: [0.3, 1],
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        xaxis: {
            categories: ["2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21"],
            labels: {
                style: {
                    colors: [],
                    fontSize: '12px',
                    fontFamily: 'Red Hat Text, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            categories: ['$1000', '$2000', '$3000', '$4000'],
            labels: {
                style: {
                    colors: [],
                    fontSize: '11px',
                    fontFamily: 'Red Hat Text, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        }
    };


    var chart = new ApexCharts(document.querySelector("#customChart1"), options);
    chart.render();
}

$('#customChart1').mousemove(function (e) {
    var x = e.clientX
    let windowWidth = $(window).innerWidth()
    if (x < (windowWidth / 2) + 50) {
        $('#customChart1 .apexcharts-tooltip').removeClass("apexcharts-tooltip--left ")
        $('#customChart1 .apexcharts-tooltip').addClass("apexcharts-tooltip--right ")
    } else {
        $('#customChart1 .apexcharts-tooltip').removeClass("apexcharts-tooltip--right ")
        $('#customChart1 .apexcharts-tooltip').addClass("apexcharts-tooltip--left ")
    }
});

function Chart2() {
    var options = {
        series: [{
            name: 'series1',
            data: [1600, 3500, 500, 1200, 1000, 700]
        }],
        chart: {
            height: 350,
            type: 'area',
            fontFamily: 'Roboto, sans-serif',
            foreColor: '#A2A3A5',

            toolbar: {
                show: false
            },
        },
        colors: ['#FC8A46'],
        fill: {
            type: "gradient",
            gradient: {
                type: "horizontal",
                // shadeIntensity: 1,
                // opacityFrom: 0.7,
                // opacityTo: 1,
                colorStops: [{
                        offset: 0,
                        color: "#fc8a46",
                        opacity: 0.22
                    },
                    {
                        offset: 50,
                        color: "#fc8a46",
                        opacity: 0.12
                    },
                    {
                        offset: 90,
                        color: "#fc8a46",
                        opacity: 0.12
                    },
                    {
                        offset: 141.68,
                        color: "#FFF",
                        opacity: 0
                    }
                ]
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        xaxis: {
            categories: ["2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21"],
            labels: {
                style: {
                    colors: [],
                    fontSize: '12px',
                    fontFamily: 'Red Hat Text, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            categories: ['$1000', '$2000', '$3000', '$4000'],
            labels: {
                style: {
                    colors: [],
                    fontSize: '11px',
                    fontFamily: 'Red Hat Text, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        }
    };


    var chart = new ApexCharts(document.querySelector("#customChart2"), options);
    chart.render();
}

$('#customChart2').mousemove(function (e) {
    var x = e.clientX
    let windowWidth = $(window).innerWidth()
    if (x < (windowWidth / 2) + 50) {
        $('#customChart2 .apexcharts-tooltip').removeClass("apexcharts-tooltip--left ")
        $('#customChart2 .apexcharts-tooltip').addClass("apexcharts-tooltip--right ")
    } else {
        $('#customChart2 .apexcharts-tooltip').removeClass("apexcharts-tooltip--right ")
        $('#customChart2 .apexcharts-tooltip').addClass("apexcharts-tooltip--left ")
    }
});

$('#customChart3').mousemove(function (e) {
    var x = e.clientX
    let windowWidth = $(window).innerWidth()
    if (x < (windowWidth / 2) + 50) {
        $('#customChart3 .apexcharts-tooltip').removeClass("apexcharts-tooltip--left ")
        $('#customChart3 .apexcharts-tooltip').addClass("apexcharts-tooltip--right ")
    } else {
        $('#customChart3 .apexcharts-tooltip').removeClass("apexcharts-tooltip--right ")
        $('#customChart3 .apexcharts-tooltip').addClass("apexcharts-tooltip--left ")
    }
});

function Chart4() {
    var options = {
        series: [{
                name: 'series2',
                data: [1200, 1400, 1900, 2300, 2800, 2500],
                zIndex: 2
            }, {
                name: 'series1',
                data: [1600, 2000, 2500, 3200, 4000, 2500],
                zIndex: 1
            },

        ],
        chart: {
            height: 350,
            type: 'area',
            fontFamily: 'Roboto, sans-serif',
            foreColor: '#A2A3A5',
            // stacked: false,
            toolbar: {
                show: false
            },
        },
        colors: ['#E9E7F1', '#5273e2'],
        // fill: {
        //     colors: ['#5273e2', '#ECE9F1'],
        //     opacity: [0.1, 0.9],
        // },
        fill: {
            type: ["solid", "gradient"],
            // colors: ['#5273e2', '#ECE9F1'],
            gradient: {
                // shade: 'dark',
                type: "horizontal",
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.3,
                opacityTo: 0.01,
                stops: [0, 30, 50, 90, 141]
            },
            opacity: [0.3, 1],
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        xaxis: {
            categories: ["2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21", "2021 - 05 - 21"],
            labels: {
                style: {
                    colors: [],
                    fontSize: '12px',
                    fontFamily: 'Red Hat Text, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            categories: ['$1000', '$2000', '$3000', '$4000'],
            labels: {
                style: {
                    colors: [],
                    fontSize: '11px',
                    fontFamily: 'Red Hat Text, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        }
    };


    var chart = new ApexCharts(document.querySelector("#customChart3"), options);
    chart.render();
}

$(document).ready(function () {
    Chart1()
    Chart2()
    Chart4()

    let yLegends = $('.apexcharts-yaxis tspan')
    console.log(yLegends)
    for (let i = 0; i < yLegends.length; i++) {
        let legendVal = yLegends[i].textContent
        console.log(yLegends[i].textContent = ('$' + legendVal))
    }
    let chartTooltipValues = $(".apexcharts-tooltip-text-y-value")
    for (let i = 0; i < chartTooltipValues.length; i++) {
        // console.log(chartTooltipValues[i].text())
        // let tooltipVal = chartTooltipValues[i].html()
        // console.log(chartTooltipValues[i].innerHTML('$' + tooltipVal))
    }
    // $('.apexcharts-tooltip-text-y-value').each(function() {
    //     // выведем содержимое текущего элемента в консоль
    //     console.log($(this)[0].innerHTML);
    // });
});

function Chart3() {
    var options = {
        series: [44, 55, 13, 33],
        chart: {
            width: 500,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();
}
Chart3()