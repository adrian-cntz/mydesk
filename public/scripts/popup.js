const btnAbrirPopup = document.getElementById("btn-abrir-popup");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const btnCerrarPopup = document.getElementById("btn-cerrar-popup");


btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

const btnAbrirPopup2 = document.getElementById("btn-abrir-popup_2");
const overlay2 = document.getElementById("overlay_2");
const popup2 = document.getElementById("popup_2");
const btnCerrarPopup2 = document.getElementById("btn-cerrar-popup_2");

btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

const btnAbrirPopup3 = document.getElementById("btn-abrir-popup_3");
const overlay3 = document.getElementById("overlay_3");
const popup3 = document.getElementById("popup_3");
const btnCerrarPopup3 = document.getElementById("btn-cerrar-popup_3");

btnAbrirPopup3.addEventListener('click', function(){
    overlay3.classList.add('active');
    popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener('click', function(){
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});