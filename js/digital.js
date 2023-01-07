const horas = document.getElementById ('horas');
const minutos = document.getElementById ('minutos');
const segundos = document.getElementById ('segundos');

const relo = setInterval (function time (){

    let dateToday = new Date();
    let hr= dateToday.getHours();
    let minut = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr <10) hr = '0' + hr;
    if (minut <10) minut = '0' + minut;
    if (s <10) s = '0' + s;
    
    



    horas.textContent = hr;
    minutos.textContent = minut;
    segundos.textContent = s;

})