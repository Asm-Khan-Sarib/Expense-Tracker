const text1 = document.getElementById('text1')
const button1 = document.getElementById('doughnut_chart')
const button2 = document.getElementById('bar_chart')
const button3 = document.getElementById('remove_chart')
const chartCanvas = document.getElementById('chart').getContext('2d');
const size = document.getElementById('chartContainer')
let chart;

//remove chart
function remove() {
  if (chart) {
    chart.destroy();
    size.style.width = '0px'
    size.style.height = '0px'
  }
}
// Function to draw chart
function drawChart(chartType, food_amount, bill_amount, shopping_amount, others_amount) {
  // If chart already exists, destroy it
  remove()
  //set chart size
  size.style.width = '50%'
  size.style.height = '50%'
  // Create new chart
  chart = new Chart(chartCanvas, {
    type: chartType,
    data: {
      labels: ['Food', 'Bill', 'Shoping', 'Others'],
      datasets: [{
        label: 'Expence/Category Chart',
        data: [food_amount, bill_amount, shopping_amount, others_amount],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff0044']
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// get data for chart
function chart_data(chartType) {
  let local_data = JSON.parse(localStorage.getItem('user_info'))
  if (local_data != null) {
    let food_amount = 0
    let bill_amount = 0
    let shopping_amount = 0
    let others_amount = 0
    for (let i = 0; i < local_data.length; i++) {
      if (local_data[i].category === 'food') {
        food_amount += parseInt(local_data[i].amount)
      }
      if (local_data[i].category === 'bill') {
        bill_amount += parseInt(local_data[i].amount)
      }
      if (local_data[i].category === 'shopping') {
        shopping_amount += parseInt(local_data[i].amount)
      }
      if (local_data[i].category === 'others') {
        others_amount += parseInt(local_data[i].amount)
      }
    }
    drawChart(chartType, food_amount, bill_amount, shopping_amount, others_amount)
    let text = `Food:${food_amount} Bill:${bill_amount} Shoping:${shopping_amount} Othres:${others_amount}`
    text1.innerHTML = text
  }
  else {
    text1.innerHTML = 'Please add some expences to visualise them'
  }

}
document.addEventListener('DOMContentLoaded', function () {
  button1.addEventListener('click', function () {
    chart_data('doughnut')
  })
  button2.addEventListener('click', function () {
    chart_data('bar')
  })
  button3.addEventListener('click', function () {
    text1.innerHTML = "Chart Removed"
    remove()
  })
})