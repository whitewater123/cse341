console.log("fetch pr11 script loaded!!!")
const socket = io();

// GET Request
window.addEventListener("load", () => {
    fetch('/pr11/fetchAll')
    .then(res => res.json())
    .then(data => {
        // Do something with the response data
        for (let a of data.avengers)
        {
            document.getElementById("get").innerHTML += '<li> Hero: ' + a.name + ', Power: ' + a.power + '</li>';
        }
        //document.getElementById("get").innerHTML = JSON.stringify(data);
        console.log(data)
    })
    .catch(console.error)});
    function postRequest() {
    // POST Request
const newData = { 
    newAvenger: document.getElementById("insert").value
    , newPower: document.getElementById("power").value
 } // Get this from your input
fetch('/pr11/insert', {
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
            document.getElementById("get").innerHTML += '<li> Hero: ' + a.name + ', Power: ' + a.power + '</li>';
        }
        socket.emit("broadcast", data);
        document.getElementById("insert").value = '';
        document.getElementById("power").value = '';
        console.log(data)
    })
    .catch(console.error)
}