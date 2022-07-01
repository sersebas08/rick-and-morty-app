import CONST from "./constant.js";
import {onSubmit, onClick} from "./dexie.js";
import {modal} from "./modal.js";

export const buscarPersonajesNombres = () => `query {
 characters( filter: { name: "" }) {
    results {
      id  
      name
      image
      species
      type
      status
      gender
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
                                    <button class="btnFavoritoHome m-2"  
                                        data-name="${appi[i].name}" 
                                        data-id="${appi[i].id}"
                                        data-img="${appi[i].image}"
                                        data-status="${appi[i].status}"
                                        data-specie="${appi[i].species}"
                                        data-location="${appi[i].location.name}"
                                        data-origin="${appi[i].origin.name}"
                                    ><i class="bi bi-star-fill mr-2 perri2"></i></button>
                                    <button data-name="${appi[i].name}" class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i></button>
                                    <button title="Ver Mas"class="btnVerMas m-2" data-name="${appi[i].name}" 
                                        data-id="${appi[i].id}"
                                        data-img="${appi[i].image}"
                                        data-status="${appi[i].status}"
                                        data-specie="${appi[i].species}"
                                        data-gender="${appi[i].gender}"
                                        data-type="${appi[i].type}"
                                        data-location="${appi[i].location.name}"
                                        data-origin="${appi[i].origin.name}"><i class="bi bi-eye-fill mr-2 perri3"></i></button>
                                 </div>
                             </div>
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
            const iteral = {
                id: this.dataset.id,
                name: this.dataset.name,
                image: this.dataset.img,
                status: this.dataset.status,
                specie: this.dataset.specie,
                gender: this.dataset.gender,
                type: this.dataset.type,
                location: this.dataset.location,
                origin: this.dataset.origin
            };
            modal(iteral);
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
            const it = {
                id: this.dataset.id,
                name: this.dataset.name,
                image: this.dataset.img,
                status: this.dataset.status,
                specie: this.dataset.specie,
                location: this.dataset.location,
                origin: this.dataset.origin
            };
            if (estadoFavorito === 0){
                item.style.color = '#C5C52CFF';
                estadoFavorito = 1;
                onSubmit(it);
                setTimeout(function (){
                    CONST.estado.innerHTML = '';
                    CONST.estado.style.backgroundColor = '';
                }, 2000);
                CONST.estado.innerHTML = `${this.dataset.name} ! Guardado en favoritos`;
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
                CONST.estado.innerHTML = `${this.dataset.name} ! Te gusta`;
                CONST.estado.style.position = 'fixed';
                CONST.estado.style.backgroundColor = '#d0e995';
            } else {
                items.style.color = '';
                estado = 0;
            }
        });
    })
}


