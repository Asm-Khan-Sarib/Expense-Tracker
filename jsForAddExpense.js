const button5 = document.getElementById('submit')
const text3 = document.getElementById('text3')
const form = document.querySelector('.give_data')

//get and save data
function save_all_transaction() {
    let amount = document.querySelector('#amount1').value || 0
    let date = document.querySelector('#date1').value || 0
    let category = document.querySelector('input[name="category"]:checked').value || 0
    let description = document.querySelector('#description1').value || 0
    let id = 1000
    let local_data = []
    if (description.length > 20) {
        description = description.slice(0, 20) + '...'
    }
    if (date.length > 10) {
        date = date.slice(0, 10) + '...'
    }
    
    local_data = JSON.parse(localStorage.getItem('user_info'))
    if (local_data != null) {
        localStorage.removeItem('user_info');
        id=local_data[local_data.length-1].id+1

    }
    else {
        local_data = []
    }

    let data = {
        amount: amount,
        date: date,
        category: category,
        description: description,
        id: id
    }

    local_data.push(data)
    localStorage.setItem('user_info', JSON.stringify(local_data))
    text3.innerHTML = `Succesfully added to your profile <br>Total number of Transaction: ${local_data.length}`
}

document.addEventListener('DOMContentLoaded', function () {
    let local_data = JSON.parse(localStorage.getItem('profile'))
    if (local_data != null) {
        button5.disabled = false
        button5.addEventListener('click', function () {
            text3.innerHTML = "Please fill all the boxes to save your information"
        })
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            save_all_transaction()
        })
    }
    else {
        text3.innerHTML = '<br><br>Plase create a profile first'
        button5.disabled = true
    }

})