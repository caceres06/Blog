function CambiarDisplay(){
    var lunes=document.querySelector(".lun")
    var martes=document.querySelector(".mar")
    var miercoles=document.querySelector(".mier")
    var jueves=document.querySelector(".jue")
    var viernes=document.querySelector(".vie")

document.querySelector(".ma").addEventListener("click", ()=> {
    lunes.classList.toggle("mar")
})
}

window.onload=function()
{
    CambiarDisplay();
}