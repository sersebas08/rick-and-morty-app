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


CONST.btn.addEventListener('click', () => {

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
            leerPersonajesNombre(data);

            CONST.input.value = '';
        })
        .catch(function (err){
            console.log("este es el error", err);})
})

export function leerPersonajesNombre(json){
    /*console.log('el personaje: ', json.data.characters.results);*/
    let pers = '';
    let appi = json.data.characters.results;


    for (let i = 0; i < appi.length; i++) {

        pers += `<div class="personajes">
                        <div class="divSelect">
                            <button class="btnFavorito m-2" type="button"><i class="bi bi-star-fill mr-2 perri2"></i></button>
                            <!--<p class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i></p>-->
                            <h2 class="btnFavorito btn btn-link bi bi-star-fill mr-2 perri2"></h2>
                            <h3 class="btnMeGusta btn btn-link bi bi-heart-fill mr-2 perri"></h3>
                        </div>
                       <picture class="w-full p-3">
                          <source media="(min-width: 751px)" srcset="${appi[i].image}">
                          <source media="(min-width: 380px)" srcset="${appi[i].image}">
                          <img src="${appi[i].image}" class="img " alt="Mi imagen responsive">
                        </picture>
                        <div class="personajes__div">
                            <ul class="personajes__divUl">
                                <li class="uno">Nombre</li>
                                <li>${appi[i].name}</li>
                                <li class="uno">Origen</li>
                                <li>${appi[i].origin.name}</li>
                                <li class="uno">Especie</li>
                                <li>${appi[i].species}</li>
                                <li class="uno">Status</li>
                                <li>${appi[i].status}</li>
                                <li class="uno">Planeta</li>
                                <li>${appi[i].location.name}</li>
                            </ul>
                           
                        </div>
                    </div>`;


    }
    CONST.divBusqueda.innerHTML = `<div class="phil">${pers}</div>`;

}
