const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const text3 = document.getElementById('text3')
const button1 = document.getElementById('pie_chart')
const button2 = document.getElementById('bar_chart')
const button3 = document.getElementById('remove_chart')
const button4 = document.getElementById('all_info')
const button5 = document.getElementById('submit')
const form = document.querySelector('.give_data')
const chartCanvas = document.getElementById('chart').getContext('2d');
const size = document.getElementById('chartContainer')
let chart;


//get and save data
function save_all_transaction() {
    let amount = document.querySelector('#amount1').value || 0
    let date = document.querySelector('#date1').value || 0
    let category = document.querySelector('input[name="category"]:checked').value || 0
    let description = document.querySelector('#description1').value || 0
    let local_data = []
    let data = {
        amount: amount,
        date: date,
        category: category,
        description: description,
    }
    local_data = JSON.parse(localStorage.getItem('user_info'))
    if (local_data != null) {
        localStorage.removeItem('user_info');
    }
    else{
        local_data=[]
    }
    local_data.push(data)
    localStorage.setItem('user_info', JSON.stringify(local_data))
    text3.innerHTML = `Succesfully added to your profile <br>Total number of Transaction: ${local_data.length}`
}
// page: transaction button: show_all_transaction
function show_all_transaction() {
    let local_data = JSON.parse(localStorage.getItem('user_info'))
    if (local_data != null) {
        let text = ''
        let total = 0
        for (let i = 0; i < local_data.length; i++) {
            text += `Amount: ${local_data[i].amount},`
            text += ` Date: ${local_data[i].date},`
            text += ` category: ${local_data[i].category},`
            text += ` Description: ${local_data[i].description},`
            text += '<br>'
            total += parseInt(local_data[i].amount)
        }
        text2.innerHTML = text
    }
    else {
        text2.innerHTML = 'null'
    }
}
//remove chart
function remove(){
    if (chart) {
      chart.destroy();
      size.style.width='0px'
      size.style.height='0px'
    }
}
// Function to draw chart
function drawChart(chartType,food_amount,bill_amount,shopping_amount,others_amount) {
    // If chart already exists, destroy it
    remove()
    //set chart size
    size.style.width='50%'
    size.style.height='50%'
    // Create new chart
    chart = new Chart(chartCanvas, {
      type: chartType,
      data: {
        labels: ['Food', 'Bill', 'Shoping', 'Others'],
        datasets: [{
          data: [food_amount,bill_amount,shopping_amount,others_amount],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff0044']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

// get data for chart
function draw_chart(chartType){
    let local_data = JSON.parse(localStorage.getItem('user_info'))
    let food_amount = 0
    let bill_amount= 0
    let shopping_amount= 0
    let others_amount= 0
    

    for (let i = 0; i < local_data.length; i++){
        if(local_data[i].category === 'food'){
            food_amount += parseInt(local_data[i].amount)
        }
        if(local_data[i].category === 'bill'){
            bill_amount += parseInt(local_data[i].amount)
        }
        if(local_data[i].category === 'shopping'){
            shopping_amount += parseInt(local_data[i].amount)
        }
        if(local_data[i].category === 'others'){
            others_amount += parseInt(local_data[i].amount)
        }
    }
    drawChart(chartType,food_amount,bill_amount,shopping_amount,others_amount)
    let text = `food: ${food_amount}`
    text1.innerHTML = text
}
document.addEventListener('DOMContentLoaded', function () {
    if (button1 != null) {
        button1.addEventListener('click', function () {
            text1.innerHTML = "Pie chart"
            draw_chart('pie')
        })
    }
    if (button2 != null) {
        button2.addEventListener('click', function () {
            text1.innerHTML = "Bar chart"
            draw_chart('bar')
        })
    }
    if (button3 != null) {
        button3.addEventListener('click', function () {
            text1.innerHTML = "Remove chart"
            remove()
        })
    }
    if (button4 != null) {
        button4.addEventListener('click', function () {
            show_all_transaction()
        })
    }
    if (button5 != null) {
        button5.addEventListener('click', function () {
            text3.innerHTML = "Please fill all the boxes to save your information"
        })
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            save_all_transaction()
        })
    }
})