const button = document.getElementById('porfile_btn')

document.addEventListener('DOMContentLoaded', function (){
    let local_data = JSON.parse(localStorage.getItem('profile'))
    if (local_data != null) {
        button.innerHTML='Update Profile'
    }
    else {
        button.innerHTML='Create Profile'
    }
})