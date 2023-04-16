const delet = document.getElementById('delet')
const delet1 = document.getElementById('delet1')
const delet5 = document.getElementById('delet5')
const submit_button = document.getElementById('submit')
const text = document.getElementById('text')
const text2 = document.getElementById('text2')
const form = document.querySelector('.give_data')
let local_data=[]

function quick_delet(x){
    local_data = JSON.parse(localStorage.getItem('user_info'))
    if (local_data != null) {
        localStorage.removeItem('user_info');
        if(x===1){
            local_data=local_data.slice(0,-1)
            text2.innerHTML = "1 delet"
        }
        else if(x===5){
            local_data=local_data.slice(0,-5)
            text2.innerHTML = "5 delet"
        }
        if(x!='all'  && (local_data.length>=1)){
            localStorage.setItem('user_info', JSON.stringify(local_data))
        }
        else{
            text2.innerHTML = "All delet"
        }
    }
    else {
        text2.innerHTML = "You have no Trunsection left to delet"
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
            text.innerHTML = "Transection deleted succesfully"
        }
        else{
            text.innerHTML = "Transection not found <br>Please write only one transection id at a time"
        }
    }
    else{
        text.innerHTML = "Empty list"
    }
}


document.addEventListener('DOMContentLoaded', function (){
    submit_button.addEventListener('click', function () {
        text.innerHTML = "Please write a valid id in the box"
    })
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        delet_by_id() 
    })
    delet.addEventListener('click', function () {
        quick_delet('all')
    })
    delet1.addEventListener('click', function () {
        quick_delet(1)
    })
    delet5.addEventListener('click', function () {
        quick_delet(5)
    })
})