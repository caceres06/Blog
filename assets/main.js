function muestraLunes(id){
    if (document.getElementById){
    var el = document.getElementById(id); 
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}

function muestraMartes(id){
    if (document.getElementById){
    var dia2 = document.getElementById(id); 
    dia2.style.display = (dia2.style.display == 'none') ? 'block' : 'none';
    }
}
function muestraMiercoles(id){
    if (document.getElementById){
    var dia3 = document.getElementById(id); 
    dia3.style.display = (dia3.style.display == 'none') ? 'block' : 'none';
    }
}

function muestrJueves(id){
    if (document.getElementById){
    var el = document.getElementById(id); 
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}

window.onload = function(){
    muestraLunes('1');
    muestraMartes('2');
    muestraMiercoles('3');
}

