const text2 = document.getElementById('text2')
const button4 = document.getElementById('all_info')
// page: transaction button: show_all_transaction
function show_all_transaction() {
    let local_data = JSON.parse(localStorage.getItem('user_info'))
    if (local_data != null) {
        let text = '<tr><td><b>Amount</b></td><td><b>Date</b></td><td><b>category</b></td><td><b>Description</b></td></tr>'
        for (let i = 0; i < local_data.length; i++) {
            text +=`<tr>`
            text += `<td>${local_data[i].amount}</td>`
            text += `<td>${local_data[i].date}</td>`
            text += `<td>${local_data[i].category}</td>`
            text += `<td>${local_data[i].description}</td>`
            text += '</tr>'
        }
        text2.innerHTML = `<br><table>${text}</table><br><br>`
    }
    else {
        text2.innerHTML = 'null'
    }
}

document.addEventListener('DOMContentLoaded', function (){
    button4.addEventListener('click', function () {
        text2.innerHTML='working'
        show_all_transaction()
    })
})