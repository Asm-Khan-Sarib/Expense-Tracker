const text1=document.getElementById('text1')
const text2=document.getElementById('text2')
const button1=document.getElementById('pie_chart')
const button2=document.getElementById('bar_chart')
const button3=document.getElementById('remove_chart')
const button4=document.getElementById('all_info')

document.addEventListener('DOMContentLoaded', function(){
    if(button1!=null){
        button1.addEventListener('click', function(){
            text1.innerHTML="Pie chart"
        })
    }
    if(button2!=null){
        button2.addEventListener('click', function(){
            text1.innerHTML="Bar chart"
        })
    }
    if(button3!=null){
        button3.addEventListener('click', function(){
            text1.innerHTML="Remove chart"
        })
    }
    if(button4!=null){
        button4.addEventListener('click', function(){
            text2.innerHTML="Show All Transactions"
        })
    }
})