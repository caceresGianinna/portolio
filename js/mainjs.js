/*
	Created by Gianinna Caceres 
	Gianinnas Caceres Website
	2015
*/
//Bootstrap tooltip 
$(document).ready(function() {
    $.ajax({
        url: "https://api.linkedin.com/v1/people/~:(id,first-name,skills,educations,languages,twitter-accounts)?format=json",
        context: document.body
    }).done(function(data) {
        alert(data);
    });
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
})

$(function() {
    var skillsChart = {
        chart: {
            renderTo: 'skillsContainer',
            type: 'column',
            marginLeft: 13,
            marginBottom: 30,
            marginTop: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            // width: 900

        },
        credits: {
            enabled: false
        },
        title: {
            text: 'My core skills'
        },
        legend: {
            enabled: false

        },
        plotOptions: {
            series: {
                colorByPoint: true,
                borderWidth: 0,
                animation: {
                    duration: 1500
                },
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        if (this.y > 0) return this.y + '%';
                    }
                }
            }
        },
        series: [{
            name: 'Skills',
            data: [95, 87, 87, 82, 60, 80]
        }],
        colors: [
            '#9b59b6',
            '#bdc3c7',
            '#1abc9c',
            '#f39c12',
            '#3498db',
            '#e67e22'
        ],
        xAxis: {
            categories: ['HTML/CSS', 'Bootstrap', 'jQuery', 'AngularJs', 'OOP Js', 'RWD'],
            labels: {
                enabled: true
            }
        },
        yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            title: {
                text: ''
            },
            labels: {
                enabled: false,
                format: '{value} %',
            }
        }
    };
    new Highcharts.Chart(skillsChart);

});