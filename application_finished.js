//Beispiel von: http://www.highcharts.com/demo/combo-dual-axes


$(function () {
    $('#container').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Durchschnittstemperatur und -niederschlag pro Monat in Berlin'
        },
        subtitle: {
            text: 'Quelle: WorldClimate.com'
        },
        xAxis: {
            categories: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            crosshair: true
        },
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                      color: 'black',
                }
            },
            title: {
                text: 'Temperatur',
                style: {
                      color: 'black',
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Niederschlag',
                style: {
                      color: '#87b9f1'
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                      color: '#87b9f1'
                }
            },
            opposite: true
        }],
        tooltip: {

            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
        },
        series: [{
            name: 'Niederschlag',
            type: 'column',
            yAxis: 1,
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Temperatur',
            type: 'spline',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
});
