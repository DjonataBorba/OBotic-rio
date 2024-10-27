let formulario = document.querySelector(".formulario")

function aparecerFormulario(){
     formulario.style.left = "5%"
}

function desaparecerFormulario(){
    formulario.style.left = "-200%"
}

let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu') 
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu') 
})
