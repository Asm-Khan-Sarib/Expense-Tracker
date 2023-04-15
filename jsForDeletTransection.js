const delet = document.getElementById('delet')
const delet1 = document.getElementById('delet1')
const delet5 = document.getElementById('delet5')
const submit_button = document.getElementById('submit')
const text = document.getElementById('text')
const text2 = document.getElementById('text2')
const form = document.querySelector('.give_data')

document.addEventListener('DOMContentLoaded', function (){
    submit_button.addEventListener('click', function () {
        text.innerHTML = "Please write only one transection id at a time"
    })
    form.addEventListener('submit', (event) => {
        event.preventDefault()
    })
    delet.addEventListener('click', function () {
        text2.innerHTML = "delet all transection"
    })
    delet1.addEventListener('click', function () {
        text2.innerHTML = "delet 1 transection"
    })
    delet5.addEventListener('click', function () {
        text2.innerHTML = "delet 5 transection"
    })
})