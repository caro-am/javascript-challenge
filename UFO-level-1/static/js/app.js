// from data.js
var tableData = data;

const table = document.getElementById("ufo-table")

tableData.forEach(data => {
    let row = table.insertRow(table.rows.length)
    let date = row.insertCell(0)
    let city = row.insertCell(1)
    let state = row.insertCell(2)
    let country = row.insertCell(3)
    let shape = row.insertCell(4)
    let duration = row.insertCell(5)
    let comments = row.insertCell(6)
    date.innerHTML = `${data.datetime}`
    city.innerHTML = `${data.city}`
    state.innerHTML = `${data.state}`
    country.innerHTML = `${data.country}`
    shape.innerHTML =  `${data.shape}`
    duration.innerHTML = `${data.durationMinutes}`
    comments.innerHTML = `${data.comments}`
});


const filter = document.getElementById("filter-btn")
filter.addEventListener("click", () => {
    let Filtered = []
    let FilteredDate = document.getElementById("datetime").value
    tableData.forEach(data => {
        if(data.datetime === FilteredDate){
            Filtered.push(data)
        }
    })
    
    while(table.rows.length > 1){
        table.deleteRow(1)
    }

    Filtered.forEach(data => {
        let row = table.insertRow(table.rows.length)
        let date = row.insertCell(0)
        let city = row.insertCell(1)
        let state = row.insertCell(2)
        let country = row.insertCell(3)
        let shape = row.insertCell(4)
        let duration = row.insertCell(5)
        let comments = row.insertCell(6)
        date.innerHTML = `${data.datetime}`
        city.innerHTML = `${data.city}`
        state.innerHTML = `${data.state}`
        country.innerHTML = `${data.country}`
        shape.innerHTML =  `${data.shape}`
        duration.innerHTML = `${data.durationMinutes}`
        comments.innerHTML = `${data.comments}`
    })
})

