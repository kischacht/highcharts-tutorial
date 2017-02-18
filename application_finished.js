$(function () {
    $('#container').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'awökdjfesvcBysdc erlin'
        },
        subtitle: {
            text: 'Quelle: WorldClimate.com'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
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
          formatter: function () {
                var s = '<b>' + this.x + '</b>';

                $.each(this.points, function () {
                    s += '<br/>' + this.series.name + ': ' +
                        this.y + 'm';
                });

                return s;
            },
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
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
