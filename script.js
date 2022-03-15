const blue = document.getElementById("blue")
const fotos = document.getElementById("vanillaFotos")


fetch("https://criptoya.com/api/dolar")
.then(response => response.json())
.then(data =>{
    let dolarBlue = data.blue
    blue.innerHTML += dolarBlue
})

for(i = 0; i < 6; i++){
    fetch("https://danbooru.donmai.us/posts/random.json?tags=rating:safe+vanilla_h+solo")
    .then(response => response.json())
    .then(data =>{
        if(data.file_url === undefined){
            i--
        }
        else{
            let foto = data.file_url
            fotos.innerHTML += `<a href="${foto}" target="_blank"><img id="foto" src="${foto}"></a>`
        }
    })
}