const blue = document.getElementById("blue")


fetch("https://criptoya.com/api/dolar")
.then(response => response.json())
.then(data =>{
    let dolarBlue = data.blue
    blue.innerHTML += dolarBlue
})