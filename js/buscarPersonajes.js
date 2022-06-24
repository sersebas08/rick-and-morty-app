import CONST from "./constant.js";

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

}
