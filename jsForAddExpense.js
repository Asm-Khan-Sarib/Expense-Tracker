const button5 = document.getElementById('submit')
const text3 = document.getElementById('text3')
const form = document.querySelector('.give_data')

//get and save data
function save_all_transaction() {
    let amount = document.querySelector('#amount1').value || 0
    let date = document.querySelector('#date1').value || 0
    let category = document.querySelector('input[name="category"]:checked').value || 0
    let description = document.querySelector('#description1').value || 0
    let local_data = []
    if(description.length>20){
        description = description.slice(0, 20) + '...'
    }
    if(date.length>10){
        date = date.slice(0, 10) + '...'
    }
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

document.addEventListener('DOMContentLoaded', function (){
    button5.addEventListener('click', function () {
        text3.innerHTML = "Please fill all the boxes to save your information"
    })
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        save_all_transaction()
    })
})