const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const button1 = document.getElementById('pie_chart')
const button2 = document.getElementById('bar_chart')
const button3 = document.getElementById('remove_chart')
const button4 = document.getElementById('all_info')

// page: transaction button: show_all_transaction
function show_all_transaction() {
    let local_data = JSON.parse(localStorage.getItem('user_info'));
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

document.addEventListener('DOMContentLoaded', function () {
    if (button1 != null) {
        button1.addEventListener('click', function () {
            text1.innerHTML = "Pie chart"
        })
    }
    if (button2 != null) {
        button2.addEventListener('click', function () {
            text1.innerHTML = "Bar chart"
        })
    }
    if (button3 != null) {
        button3.addEventListener('click', function () {
            text1.innerHTML = "Remove chart"
        })
    }
    if (button4 != null) {
        button4.addEventListener('click', function () {
            show_all_transaction()
        })
    }
})