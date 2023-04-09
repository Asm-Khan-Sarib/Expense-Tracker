const text1=document.getElementById('text1')
const chart1=document.getElementById('pie_chart')
const chart2=document.getElementById('bar_chart')
const chart3=document.getElementById('remove_chart')

document.addEventListener('DOMContentLoaded', function(){
    chart1.addEventListener('click', function(){
        text1.innerHTML="Pie chart"
    })
    chart2.addEventListener('click', function(){
        text1.innerHTML="Bar chart"
    })
    chart3.addEventListener('click', function(){
        text1.innerHTML="Remove chart"
    })
})