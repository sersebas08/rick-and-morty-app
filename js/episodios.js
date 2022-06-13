import CONST from "./constant.js";

export const buscarEpisodios = (personaje) => `query {
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
            query: buscarEpisodios(valorImput)
        })
    }
    fetch(`https://rickandmortyapi.com/graphql?query=${buscarEpisodios(valorImput)}`, options)
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerEpisodios(data);
            CONST.input.value = '';
        })
        .catch(function (err){
            console.log("este es el error", err);})
})

function leerEpisodios(json){
    /*console.log('el personaje: ', json.data.characters.results);*/
    let pers = '';
    let appi = json.data.characters.results;
    for (let i = 0; i < appi.length; i++) {

        pers += `<div class="personajes">
                        <img class="img" src="${appi[i].image}" />
                        <div class="personajes__div">
                            <ul>
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
                            <div class="divSelect">
                                <p class="btnFavorito m-2"><i class="bi bi-star-fill mr-2 perri2"></i></p>
                                <p class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i></p>
                            </div>
                        </div>
                    </div>`;


    }

    CONST.divBusqueda.innerHTML = `<div class="phil">${pers}</div>`;




}




