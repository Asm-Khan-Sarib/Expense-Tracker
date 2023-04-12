const text2 = document.getElementById('text2')
const button4 = document.getElementById('all_info')

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

document.addEventListener('DOMContentLoaded', function (){
    button4.addEventListener('click', function () {
        text2.innerHTML='working'
        show_all_transaction()
    })
})