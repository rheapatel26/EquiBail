
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('bg-vid');

    // Set the playback speed (0.5 is half the normal speed, 2 is twice the normal speed)
    video.playbackRate = 0.35;
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Hide the loader
        document.querySelector('.loader').classList.add('hidden');
        // Show the result page
        document.querySelector('.result').style.display = 'block';
    }, 4000); // 3000 milliseconds = 3 seconds
});

ddocument.addEventListener('DOMContentLoaded', () => {
    // Data for the ring graphs
    const bailPercentage = 75; // Example value
    const riskReattempt = 40;  // Example value

    // Initialize the ring graphs using Chart.js
    const bailPercentageCtx = document.getElementById('bailPercentageChart').getContext('2d');
    const riskReattemptCtx = document.getElementById('riskReattemptChart').getContext('2d');

    new Chart(bailPercentageCtx, {
        type: 'doughnut',
        data: {
            labels: ['Bail %', 'Remaining'],
            datasets: [{
                data: [bailPercentage, 100 - bailPercentage],
                backgroundColor: ['#36a2eb', '#cccccc'],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 70,
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

    new Chart(riskReattemptCtx, {
        type: 'doughnut',
        data: {
            labels: ['Risk of Reattempt', 'Remaining'],
            datasets: [{
                data: [riskReattempt, 100 - riskReattempt],
                backgroundColor: ['#ff6384', '#cccccc'],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 70,
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });
});
