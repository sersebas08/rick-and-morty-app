
import CONST from "./js/constant.js";
import {buscarEpisodiosNombre} from "./js/episodios.js";
import {buscarPersonajes} from "./js/personajes.js";
import {buscarPersonajesNombre} from "./js/buscarPersonajes.js";
import {init} from "./js/dexie.js";


window.addEventListener('DOMContentLoaded', (e) => {
    buscarPersonajesNombre();
    buscarPersonajes();
    buscarEpisodiosNombre();
    init();
});



// botones del menu

CONST.btnHome.addEventListener('click', () => {
    CONST.divHome.classList.remove('hidden');
    CONST.divPersonajes.classList.add('hidden');
    CONST.divEpisodios.classList.add('hidden');
    CONST.philips.classList.add('hidden')
})
CONST.btnPersonajes.addEventListener('click', () => {
    CONST.divPersonajes.classList.remove('hidden');
    CONST.divEpisodios.classList.add('hidden');
    CONST.divHome.classList.add('hidden');
    CONST.philips.classList.add('hidden')
})
CONST.btnEpisodios.addEventListener('click', () => {
    CONST.divEpisodios.classList.remove('hidden');
    CONST.divPersonajes.classList.add('hidden');
    CONST.divHome.classList.add('hidden');
    CONST.philips.classList.add('hidden')
})
CONST.btnFavoritos.addEventListener('click', () => {
    CONST.divEpisodios.classList.add('hidden');
    CONST.divPersonajes.classList.add('hidden');
    CONST.divHome.classList.add('hidden');
    CONST.philips.classList.remove('hidden')
})


window.addEventListener('offline', event => {
    CONST.estado.innerHTML = 'Estas navegando sin conexion a la red';
    CONST.estado.style.position = 'fixed';
    CONST.estado.style.backgroundColor = 'rgb(175 220 40)';

})

window.addEventListener('online', event => {
    setTimeout(function (){
        CONST.estado.innerHTML = '';
        CONST.estado.style.backgroundColor = '';
    }, 4000);
    CONST.estado.innerHTML = 'Estas Conectado ...';
    CONST.estado.style.position = 'fixed';
    CONST.estado.style.backgroundColor = '#d0e995';
})

if (!navigator.onLine){
    console.log('Sin conexion');
}






