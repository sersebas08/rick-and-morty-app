
import CONST from "./js/constant.js";
import {buscarEpisodios} from "./js/episodios.js";
import {buscarPersonajes} from "./js/personajes.js";



window.addEventListener('DOMContentLoaded', (e) => {
    buscarEpisodios();
    buscarPersonajes();

});
// db
/*
var db, ul;

function init(){
    db = new Dexie("tp-2-pwa");

    document.body.addEventListener('submit', onSubmit);
    document.body.addEventListener('click', onClick);
}*/




// botones del menu

CONST.btnHome.addEventListener('click', () => {
    CONST.divHome.classList.remove('hidden');
    CONST.divPersonajes.classList.add('hidden');
    CONST.divEpisodios.classList.add('hidden');
})
CONST.btnPersonajes.addEventListener('click', () => {
    CONST.divPersonajes.classList.remove('hidden');
    CONST.divEpisodios.classList.add('hidden');
    CONST.divHome.classList.add('hidden');
})
CONST.btnEpisodios.addEventListener('click', () => {
    CONST.divEpisodios.classList.remove('hidden');
    CONST.divPersonajes.classList.add('hidden');
    CONST.divHome.classList.add('hidden');
})


window.addEventListener('offline', event => {
    CONST.estado.innerHTML = 'Estas navegando sin conexion a la red';
    CONST.estado.style.backgroundColor = 'rgb(175 220 40)';

})

window.addEventListener('online', event => {
    CONST.estado.innerHTML = '';
})

if (!navigator.onLine){
    console.log('Sin conexion');
}



// ventana modal
/*function modal(){
    console.log('hasta llego: ' );

    /!* console.log('esta es la data de cafeteria: ' , );*!/
    ventanaHombres.classList.add("modalHombre");
    ventanaHombres.classList.remove("hidden");


    let a = document.createElement('a');
    a.href = '#';
    a.id = 'modal'
    a.innerHTML = 'X';
    a.onclick = function () {

        ventanaHombres.classList.add("hidden");
        ventanaHombres.classList.remove("modalHombre");
        return false;
    }
    ventanaHombres.appendChild(a);
    console.log('hola mundo')

}
let ventanaHombres = document.querySelector('#ventanaHombres');
let button = document.querySelector('.button');
button.onclick = modal;*/


