import CONST from "./constant.js";
import {onSubmit} from "./dexie.js";


export const buscarPersonajesNombres = () => `query {
 characters( filter: { name: "" }) {
    results {
      id  
      name
      image
      species
      status
      origin{
        name
      }
      location {
        name
      }
    }
  }
}`
export function buscarPersonajes() {

    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: buscarPersonajesNombres()
        })
    }
    fetch(`https://rickandmortyapi.com/graphql?query=${buscarPersonajesNombres()}`, options)
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerPersonajes(data);
        })
        .catch(function (err){
            console.log("este es el error", err);})
}

function leerPersonajes(data){
    let appi = data.data.characters.results;
    let images = '';

    for (let i = 0; i < appi.length; i++) {
        images += `<div class="divPersonajesHome">
                        <div class="personajes">
                             <picture class="w-full p-2">
                               <source media="(min-width: 751px)" srcset="${appi[i].image}">
                               <source media="(min-width: 380px)" srcset="${appi[i].image}">
                               <img src="${appi[i].image}" class="img " alt="Mi imagen responsive">
                             </picture>
                             <div class="divSelect">
                                 <h3 class="personaje__h3">${appi[i].name}</h3>
                                 <h4 class="personaje__h4">${appi[i].species}</h4>
                                 <div class="divSelec__divBotones">
                                    <p class="btnFavoritoHome m-2"><i class="bi bi-star-fill mr-2 perri2"></i></p>
                                    <p class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i></p>
                                    <p class="btnVerMas m-2"><i class="bi bi-eye-fill mr-2 perri3"></i></p>
                                 </div>
                             </div>
                        </div>
                        <div  class="personajes__div monoDiv hidden">
                            <picture class="w-9/12 p-2">
                              <source media="(min-width: 751px)" srcset="${appi[i].image}">
                              <source media="(min-width: 380px)" srcset="${appi[i].image}">
                              <img src="${appi[i].image}" class="img " alt="Mi imagen responsive">
                            </picture>
                            <div class="personajes__div">
                                <ul class="personajes__divUl">
                                    <li><span class="uno">Status</span>${appi[i].status}</li>
                                    <li><span class="uno">Specie</span>${appi[i].species}</li>
                                    <li><span class="uno">Nombre</span>${appi[i].name}</li>
                                    <li><span class="uno">Ubicacion</span>${appi[i].location.name}</li>
                                </ul>
                            </div>
                            <button id="btnVolve" class="btn__uno">Volver a Home</button>
                        </div>
                    </div>`;

    }
    CONST.divVista.innerHTML = `<div class="phil">${images}</div>`;

    let estadoFavorito = 0;
    let estado = 0;
    let btnFavoritoHome = document.querySelectorAll('.btnFavoritoHome');
    let btnMegusta = document.querySelectorAll('.btnMeGusta');
    let btnVerMas = document.querySelectorAll('.btnVerMas');
    let personajes = document.querySelectorAll('.personajes');
    let personajesDiv = document.querySelector('.personajes__div');
    let btnVolve = document.querySelectorAll('#btnVolve');
    btnVerMas.forEach(function (itemns) {
        itemns.addEventListener('click', function (){
            personajes.forEach(function (ite){
                ite.classList.add('hidden');
                personajesDiv.classList.remove('hidden');
            })
        });
    })
    btnVolve.forEach(function (itenss){
        itenss.addEventListener('click', function (){
            personajes.forEach(function (ite){
                ite.classList.remove('hidden');
                personajesDiv.classList.add('hidden')
            })
        })
    })
    btnFavoritoHome.forEach(function (item){
        item.addEventListener('click', function (){
            if (estadoFavorito === 0){
                item.style.color = '#C5C52CFF';
                estadoFavorito = 1;
                onSubmit(data);
                setTimeout(function (){
                    CONST.estado.innerHTML = '';
                    CONST.estado.style.backgroundColor = '';
                }, 2000);
                CONST.estado.innerHTML = 'Guardado en Favorito';
                CONST.estado.style.position = 'fixed';
                CONST.estado.style.backgroundColor = '#d0e995';
            } else {
                item.style.color = '';
                estadoFavorito = 0;
            }
        });
    })
    btnMegusta.forEach(function (items){
        items.addEventListener('click', function (){
            if (estado === 0){
                items.style.color = '#f81224';
                estado = 1;
                setTimeout(function (){
                    CONST.estado.innerHTML = '';
                    CONST.estado.style.backgroundColor = '';
                }, 1000);
                CONST.estado.innerHTML = 'Te gusta!! ';
                CONST.estado.style.position = 'fixed';
                CONST.estado.style.backgroundColor = '#d0e995';
            } else {
                items.style.color = '';
                estado = 0;
            }
        });
    })
}



