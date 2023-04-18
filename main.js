const button = document.getElementById('porfile_btn')
const a1= document.getElementById('profile')

document.addEventListener('DOMContentLoaded', function (){
    let local_data = JSON.parse(localStorage.getItem('profile'))
    if (local_data != null) {
        a1.innerHTML='<a href="updateProfile.html"><button id="porfile_btn" class="btn">Update Profile</button></a>'
    }
    else {
        a1.innerHTML='<a href="profile.html"><button id="porfile_btn" class="btn">Create Profile</button></a>'
    }
})