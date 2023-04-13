const text2 = document.getElementById('text2')
const button4 = document.getElementById('all_info')
const sort_time = document.getElementById('sort_time')
const sort_category = document.getElementById('sort_category')
// make table from array
function make_table(all_data) {
    let text = '<tr><td><b>Amount</b></td><td><b>Date</b></td><td><b>Category</b></td><td><b>Description</b></td></tr>'
    for (let i = 0; i < all_data.length; i++) {
        text += `<tr>`
        text += `<td>${all_data[i].amount}</td>`
        text += `<td>${all_data[i].date}</td>`
        text += `<td>${all_data[i].category}</td>`
        text += `<td>${all_data[i].description}</td>`
        text += '</tr>'
    }
    text2.innerHTML = `<br><table>${text}</table><br><br>`
}
// get data from local storage and default sort by time
function sort_by_time() {
    let local_data = JSON.parse(localStorage.getItem('user_info'))
    if (local_data != null) {
        make_table(local_data)
    }
    else {
        text2.innerHTML = 'null'
    }
}
// get data from local storage and sort by category
function sort_by_category() {
    let local_data = JSON.parse(localStorage.getItem('user_info'))
    let food = []
    let bill = []
    let shopping = []
    let others = []
    if (local_data != null) {
        for (let i = 0; i < local_data.length; i++) {
            if (local_data[i].category == 'food') {
                food.push(local_data[i])
            }
            else if (local_data[i].category == 'bill') {
                bill.push(local_data[i])
            }
            else if (local_data[i].category == 'shopping') {
                shopping.push(local_data[i])
            }
            else if (local_data[i].category == 'others') {
                others.push(local_data[i])
            }
        }
        let all_data = [...food, ...bill, ...shopping, ...others]
        make_table(all_data)
    }
    else {
        text2.innerHTML = 'null'
    }
}
document.addEventListener('DOMContentLoaded', function () {
    button4.addEventListener('click', function () {
        text2.innerHTML = 'working'
        sort_by_time()
    })
    sort_time.addEventListener('click', function () {
        text2.innerHTML = 'working'
        sort_by_time()
    })
    sort_category.addEventListener('click', function () {
        text2.innerHTML = 'working'
        sort_by_category()
    })
})