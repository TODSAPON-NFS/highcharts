
var $report = $('#report');

Highcharts.chart('container', {
    xAxis: {
        plotLines: [{ // mark the weekend
            color: 'red',
            width: 2,
            value: Date.UTC(2010, 0, 4),
            events: {
                click: function () {
                    $report.html('click');
                },
                mouseover: function () {
                    $report.html('mouseover');
                },
                mouseout: function () {
                    $report.html('mouseout');
                }
            }
        }],
        tickInterval: 24 * 3600 * 1000,
        // one day
        type: 'datetime'
    },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 24 * 3600 * 1000
    }]
});