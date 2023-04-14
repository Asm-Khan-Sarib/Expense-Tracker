const button = document.getElementById('submit')
const text6 = document.getElementById('text6')
const form = document.querySelector('.give_data')

//get and save data
function save_all_info() {
    let name = document.querySelector('#name').value
    let mail = document.querySelector('#mail').value
    let local_data = []
    let data = {
        name: name,
        mail: mail,
    }
    local_data = JSON.parse(localStorage.getItem('profile'))
    if (local_data != null) {
        localStorage.removeItem('profile');
        local_data=[]
    }
    else{
        local_data=[]
    }
    local_data.push(data)
    localStorage.setItem('profile', JSON.stringify(local_data))
    
    text6.innerHTML = `Succesfully added to your profile <br>Name: ${name} Mail: ${mail}`
}

document.addEventListener('DOMContentLoaded', function (){
    button.addEventListener('click', function () {
        text6.innerHTML = "Please fill all the boxes to save your information"
    })
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        save_all_info()
    })
})