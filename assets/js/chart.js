var ctx = document.getElementById("todayChart").getContext('2d');
var data = {
    datasets: [{
        data: [10, 50, 30, 45, 70, 40, 5],
        fill: false,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(235, 0, 0)'
    }],
    labels: [
        'Mon',
        'Tue',
        'Wed',
        'Thur',
        'Fri',
        'Sat',
        'Sun'
    ]
};
var myDoughnutChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
});

var ctx_2 = document.getElementById("monthChart").getContext('2d');
var data_2 = {
    datasets: [{
        data: [10, 20, 30, 70, 210, 30, 20, 30, 70, 70, 210, 30, 59, 23,52,02, 75, 29, 10,20, 70, 210, 30, 20, 30, 70, 70, 210, 30, 59, 39, 70],
        backgroundColor: [
            '#3c8dbc', '#f56954', '#f39c12', '#3c8dbc', '#f56954', '#f39c12', '#3c8dbc', '#f56954', '#f39c12',
            '#3c8dbc', '#f56954', '#f39c12', '#3c8dbc', '#f56954', '#f39c12', '#3c8dbc', '#f56954', '#f39c12',
            '#3c8dbc', '#f56954', '#f39c12', '#3c8dbc', '#f56954', '#f39c12', '#3c8dbc', '#f56954', '#f39c12',
            '#3c8dbc', '#f56954', '#f56954'
        ]
    }],
    labels: [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
    ]
};
var myDoughnutChart_2 = new Chart(ctx_2, {
    type: 'bar',
    data: data_2,
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
});


function beforePrintHandler () {
    for (var ctx in Chart.instances) {
        Chart.instances[ctx].resize();
    }

    // for (var monthCtx in Chart.instances) {
    //     Chart.instances[monthCtx].resize();
    // }
}