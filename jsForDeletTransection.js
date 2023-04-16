const delet = document.getElementById('delet')
const delet1 = document.getElementById('delet1')
const delet5 = document.getElementById('delet5')
const submit_button = document.getElementById('submit')
const text = document.getElementById('text')
const text2 = document.getElementById('text2')
const text3 = document.getElementById('text3')
const form = document.querySelector('.give_data')
let local_data=[]

function quick_delet(x){
    local_data = JSON.parse(localStorage.getItem('user_info'))
    if (local_data != null) {
        localStorage.removeItem('user_info');
        if(x===1){
            local_data=local_data.slice(0,-1)
            text2.innerHTML = "Last transection has been deleted"
        }
        else if(x===5){
            local_data=local_data.slice(0,-5)
            text2.innerHTML = "Last 5 transectiona have been deleted"
        }
        if(x!='all'  && (local_data.length>=1)){
            localStorage.setItem('user_info', JSON.stringify(local_data))
        }
        else{
            text2.innerHTML = "All transection have been deleted"
        }
    }
    else {
        text2.innerHTML = "You have no transection left to delet"
    }
}
function delet_by_id(){
    let id_position=-1
    let delet_id = document.querySelector('#delet_id').value
    local_data = JSON.parse(localStorage.getItem('user_info'))
    if (local_data != null) {
        for (let i = 0; i < local_data.length; i++) {
            if(delet_id == parseInt(local_data[i].id)){
                id_position=i
                break
            }
        }
        if(id_position!=-1){
            localStorage.removeItem('user_info');
            local_data.splice(id_position,1)
            if(local_data.length>0){
                localStorage.setItem('user_info', JSON.stringify(local_data))
            }
            text.innerHTML = "Transection has been deleted"
        }
        else{
            text.innerHTML = "Transection not found <br>Please write only one transection id at a time"
        }
    }
    else{
        text.innerHTML = "You have no transection left to delet"
    }
}


document.addEventListener('DOMContentLoaded', function (){
    let local_data = JSON.parse(localStorage.getItem('profile'))
    if(local_data != null){
        submit_button.disabled = false
        delet.disabled = false
        delet1.disabled = false
        delet5.disabled = false

        submit_button.addEventListener('click', function () {
            text.innerHTML = "Please write a valid transection id in the box"
            text2.innerHTML = ''
        })
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            delet_by_id() 
        })
        delet.addEventListener('click', function () {
            text.innerHTML = ''
            quick_delet('all')
        })
        delet1.addEventListener('click', function () {
            text.innerHTML = ''
            quick_delet(1)
        })
        delet5.addEventListener('click', function () {
            text.innerHTML = ''
            quick_delet(5)
        })
    }
    else{
        text3.style.color='red'
        text3.innerHTML = '<br><br>Plase create a profile to use all the featurs'
        submit_button.disabled = true
        delet.disabled = true
        delet1.disabled = true
        delet5.disabled = true
    }
    
})