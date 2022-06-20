
const divHome = document.querySelector('#divHome');
const main = document.querySelector('#main');
const divPersonajes = document.querySelector('#divPersonajes');
const divEpisodios = document.querySelector('#divEpisodios');
const vistaEpisodios = document.querySelector('#vistaEpisodios');
const divBusqueda = document.querySelector('#divBusqueda');
const estado = document.querySelector('#estado');
const btn = document.querySelector('#sendButton');
const btns = document.querySelector('#sendButtons');
const input = document.querySelector('#search');
const inputs = document.querySelector('#searchs');
const btnHome = document.querySelector('.btnHome');
const btnPersonajes = document.querySelector('.btnPersonajes');
const btnEpisodios = document.querySelector('.btnEpisodios');
/*const url = "https://rickandmortyapi.com/api/character";*/
const urls = "https://rickandmortyapi.com/api/episode";
const philip = document.querySelector('#philip');
const divVista = document.querySelector('#divVista');
const philipVersion = document.querySelector('#philipVersion');

const CONST = {
    divHome,
    main,
    divPersonajes,
    vistaEpisodios,
    divEpisodios,
    divBusqueda,
    estado,
    btn,
    btns,
    input,
    inputs,
    btnHome,
    btnPersonajes,
    btnEpisodios,
    philip,
    divVista,
    philipVersion,
    urls

}

export default CONST;