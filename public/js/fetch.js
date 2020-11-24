console.log("fetch script loaded!!!")
// GET Request
window.addEventListener("load", () => {
    fetch('/pr10/fetchAll')
    .then(res => res.json())
    .then(data => {
        // Do something with the response data
        for (let a of data.avengers)
        {
            document.getElementById("get").innerHTML += '<li>' + a.name + '</li>';
        }
        //document.getElementById("get").innerHTML = JSON.stringify(data);
        console.log(data)
    })
    .catch(console.error)});
    function postRequest() {
    // POST Request
const newData = { newAvenger: document.getElementById("insert").value } // Get this from your input
fetch('/pr10/insert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
})
    .then(res => res.json())
    .then(data => {
        // Do something with the response data
        //data.push(document.getElementById("insert").value);
        document.getElementById("get").innerHTML = '';
        for (let a of data.avengers)
        {
            document.getElementById("get").innerHTML += '<li>' + a.name + '</li>';
        }
        document.getElementById("insert").value = '';
        console.log(data)
    })
    .catch(console.error)
}