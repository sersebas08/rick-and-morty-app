import CONST from "./constant.js";
import {onSubmit} from "./dexie.js";

export const buscarPersonajesNombre = (personaje) => `query {
 characters( filter: { name: "${personaje}" }) {
    results {
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


CONST.btn.addEventListener('click', (e) => {
    e.preventDefault()
    const valorImput = CONST.input.value;
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: buscarPersonajesNombre(valorImput)
        })
    }
    fetch(`https://rickandmortyapi.com/graphql?query=${buscarPersonajesNombre(valorImput)}`, options)
        .then(function(response){
            return response.json();})
        .then(function (data){
            if(!valorImput) {
                CONST.estado.innerHTML = 'Debes escribir el nombre del persnaje !!';
                CONST.estado.style.position = 'fixed';
                CONST.input.style.border = '3px solid #a6da2f';
            } else {
                setTimeout(function (){
                    CONST.estado.innerHTML = '';
                    CONST.estado.style.backgroundColor = '';
                    CONST.input.style.border = '';
                    leerPersonajesNombre(data);
                }, 1000);
                CONST.estado.innerHTML = 'Buscando..';
                CONST.estado.style.backgroundColor = '#d0e995';
            }
            CONST.input.value = '';
        })
        .catch(function (err){
            console.log("este es el error", err);})
})

export function leerPersonajesNombre(json){
    let pers = '';
    let appi = json.data.characters.results;
    for (let i = 0; i < appi.length; i++) {

        pers += `<div class="personajesFavoritos">
                       <div class="divSelec__divBotones">
                            <button class="btnFavoritoPersonajes m-2"  
                                data-name="${appi[i].name}" 
                                data-id="${appi[i].id}"
                                data-img="${appi[i].image}"
                                data-status="${appi[i].status}"
                                data-specie="${appi[i].species}"
                                data-location="${appi[i].location.name}"
                                data-origin="${appi[i].origin.name}"
                            ><i class="bi bi-star-fill mr-2 perri2"></i></button>
                       </div>             
                       <picture class="w-full p-3">
                          <source media="(min-width: 751px)" srcset="${appi[i].image}">
                          <source media="(min-width: 380px)" srcset="${appi[i].image}">
                          <img src="${appi[i].image}" class="img " alt="Mi imagen responsive">
                        </picture>
                        <div class="personajes__div">
                            <ul class="personajes__divUl">
                                <li><span class="uno">Nombre </span>${appi[i].name}</li>
                                <li><span class="uno">Origen </span>${appi[i].origin.name}</li>
                                <li><span class="uno">Especie </span>${appi[i].species}</li>
                                <li><span class="uno">Status </span>${appi[i].status}</li>
                                <li><span class="uno">Planeta </span>${appi[i].location.name}</li>
                            </ul>
                           
                        </div>
                    </div>`;


    }
    CONST.divBusqueda.innerHTML = `<div class="phil">${pers}</div>`;
    let btnFavoritoPersonajes = document.querySelectorAll('.btnFavoritoPersonajes');
    let estadoFavorito = 0;
    btnFavoritoPersonajes.forEach(function (item){
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
                item.style.color = '#a6da2f';
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
}
