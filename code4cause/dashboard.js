// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Sample data (replace with actual data)
    const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
    const grades = [85, 90, 78, 92, 88];
    const behaviorScores = [75, 80, 70, 85, 90];
    const timeSpent = [120, 140, 110, 150, 130];

    // Create the grade chart
    const gradeCtx = document.getElementById('gradeChart').getContext('2d');
    new Chart(gradeCtx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Grades',
                data: grades,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Create the behavior chart
    const behaviorCtx = document.getElementById('behaviorChart').getContext('2d');
    new Chart(behaviorCtx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Behavior Score',
                data: behaviorScores,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Create the time spent chart
    const timeSpentCtx = document.getElementById('timeSpentChart').getContext('2d');
    new Chart(timeSpentCtx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'Time Spent (minutes)',
                data: timeSpent,
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
