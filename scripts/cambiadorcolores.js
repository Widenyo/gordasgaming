let backgroundColor = "rgba(0,0,0, 0.8)"
let color = "red"
const backgroundPicker = document.getElementById("backgroundpicker")
const colorPicker = document.getElementById("colorpicker")
const divs = document.querySelectorAll('div')

for(let i = 0; i < divs.length;i++){
    divs[i].addEventListener('click', () =>{
        divs[i].style.backgroundColor = backgroundColor
        divs[i].style.color = color
    })
}

backgroundPicker.addEventListener('change', (e) =>{
    backgroundColor = e.target.value + "CC"
})

colorPicker.addEventListener('change', (e) =>{
    color = e.target.value
})