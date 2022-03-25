const blue = document.getElementById("blue")
const miNinaBonita = ["MI NIÑA BONITA MI DULCE PRINCESA", "ME SIENTO EN LAS NUBES CUANDO TU ME BESAS", "Y SIENTO QUE VUELO MAS ALTO QUE EL CIELO", "SI TENGO DE CERCA EL OLOR DE TU PELO", "MI NIÑA BONITA BRILLANTE LUCERO", 'TE QUEDA PEQUEÑA LA FRASE TE QUIERO']
const vanillaFotos = document.getElementById("vanillaFotos")
const randoms = document.getElementById("randoms")
const limpiar = document.getElementById("limpiar")

fetch("https://criptoya.com/api/dolar")
.then(response => response.json())
.then(data =>{
    let dolarBlue = data.blue
    blue.innerHTML += dolarBlue
})

limpiar.addEventListener('click', () =>{
    randoms.innerHTML = ""
})


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







