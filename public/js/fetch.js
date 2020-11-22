console.log("fetch script loaded!!!")
// GET Request
window.addEventListener("load", () => {
    fetch('/pr10/fetchAll')
    .then(res => res.json())
    .then(data => {
        // Do something with the response data
        document.getElementById("get").innerHTML = data.stringify;
        console.log(data)
    })
    .catch(console.error)});
​
// POST Request
const newData = { key: 'value' } // Get this from your input
fetch('/pr10/insert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
})
    .then(res => res.json())
    .then(data => {
        // Do something with the response data
        data.push(document.getElementById("insert").innerHTML);
        console.log(data)
    })
    .catch(console.error)