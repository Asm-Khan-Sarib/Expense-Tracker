const button = document.getElementById('submit')
const delete_btn = document.getElementById('delete_btn')
const text6 = document.getElementById('text6')
const text = document.getElementById('text')
const text7 = document.getElementById('text7')
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
    text6.innerHTML = `Profile updated succesfully`
    local_data.push(data)
    localStorage.setItem('profile', JSON.stringify(local_data))
}

document.addEventListener('DOMContentLoaded', function (){
    button.addEventListener('click', function () {
        text6.innerHTML = "Please fill all the boxes to save your information"
    })
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        save_all_info()
    })
    delete_btn.addEventListener('click', function () {
        text.innerHTML = "<br>You have to create a profile to use all the featurs of this website<br>"
        text7.style.color='red'
        text7.innerHTML = "Profile deleted succesfully"
        localStorage.removeItem('profile');
        localStorage.removeItem('user_info');
        button.disabled=true
        delete_btn.disabled=true
    })
})