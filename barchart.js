// barchart.js

// create the charts
function createCharts() {
    // Create the bar chart
    const barCtx = document.getElementById('barChart');
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
    //pie chart
    const pieCtx = document.getElementById('pieChart');
    new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      }
    });
  }
  // Check pie Chart
    if (typeof Chart === 'undefined') {
    // If Chartnot defined, wait for the script to load
    window.addEventListener('load', createCharts);
  } else {
    // create the charts immediately
    createCharts();
  }
  