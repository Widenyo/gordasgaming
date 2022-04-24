const blue = document.getElementById("blue")
const miNinaBonita = ["MI NIÑA BONITA MI DULCE PRINCESA", "ME SIENTO EN LAS NUBES CUANDO TU ME BESAS", "Y SIENTO QUE VUELO MAS ALTO QUE EL CIELO", "SI TENGO DE CERCA EL OLOR DE TU PELO", "MI NIÑA BONITA BRILLANTE LUCERO", 'TE QUEDA PEQUEÑA LA FRASE TE QUIERO']
const vanillaFotos = document.getElementById("vanillaFotos")
const randoms = document.getElementById("randoms")
const limpiar = document.getElementById("limpiar")
const backgroundPicker = document.getElementById("backgroundpicker")
const colorPicker = document.getElementById("colorpicker")
let backgroundColor = "#000000"
let color = "red"
const dmx = document.getElementById("dmx")
const divs = document.querySelectorAll('div')
let width = 250
let height = 250

fetch("https://criptoya.com/api/dolar")
.then(response => response.json())
.then(data =>{
    let dolarBlue = data.blue
    blue.innerHTML += dolarBlue
})

limpiar.addEventListener('click', () =>{
    randoms.innerHTML = ""
})

backgroundPicker.addEventListener('change', (e) =>{
    backgroundColor = e.target.value
})

colorPicker.addEventListener('change', (e) =>{
    color = e.target.value
})

dmx.addEventListener('click', ()=>{
    width /= 2
    height /= 2
    dmx.style.width = width + "px"
    dmx.style.height = height + "px"
})

for(let i = 0; i < divs.length;i++){
    divs[i].addEventListener('click', () =>{
        divs[i].style.backgroundColor = backgroundColor
        divs[i].style.color = color
        console.log(divs[i].style.backgroundColor)
    })
}



function fotos(usuarioFotos, personaje){
    let j = 0
    for(i = 0; i < 6; i++){
        fetch(`https://danbooru.donmai.us/posts/random.json?tags=rating:safe+${personaje}+solo`)
        .then(response => response.json())
        .then(data =>{
            if(data.file_url === undefined){
                i--
            }
            else{
                let foto = data.file_url
                usuarioFotos.innerHTML += `<a href="${foto}" title="${miNinaBonita[j]}" target="_blank"><img id="foto" src="${foto}"></a>`
                j++
            }
        })
    }
}







