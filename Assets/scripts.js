document.addEventListener('DOMContentLoaded', function () {
    var ctx1 = document.getElementById('ongoing-cases-graph').getContext('2d');
    var ctx2 = document.getElementById('reports-generated-graph').getContext('2d');

    var ongoingCasesChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Ongoing Cases',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Pastel red
                borderColor: 'rgba(255, 99, 132, 1)', // Red border
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var reportsGeneratedChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Reports Generated',
                data: [10, 25, 8, 15, 10, 20],
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Pastel blue
                borderColor: 'rgba(54, 162, 235, 1)', // Blue border
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
