import CONST from "./constant.js";

export const buscarEpisodios = (personaje) => `query {
  Character(id: "${personaje}") {
    name
    images
    occupation
    age
  }
}`


CONST.btn.addEventListener('click', () => {

    const valorImput = CONST.input.value;
    /*const personaje = CONST.input.value;*/
  /*  console.log('lo dejamos para mas tarde ', valorImput)*/

    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: buscarEpisodios(valorImput)
        })
    }
    fetch(`https://api.sampleapis.com/futurama/graphql?query=${buscarEpisodios(valorImput)}`, options)
        .then(function(response){
            return response.json();})
        .then(function (data){
            /*CONST.divBusqueda.innerHTML = JSON.stringify(data);*/
            leerEpisodios(data);
            CONST.input.value = '';
           /* console.log('futurama data: ', data);*/
        })
        .catch(function (err){
            console.log("este es el error", err);})
})

function leerEpisodios(json){
    console.log('el personaje: ', json.data.Character.name.first);
    let pers = '';

    const api = {
        name: json.data.Character.name.first,
        images: json.data.Character.images.main,
        ocuppation: json.data.Character.occupation
    }

    /*for (let i = 0; i < data.length; i++) {*/
   /*     console.log('recorro la data: ', data[i].name)*/
        pers += `<div class="personajes">
                        <img class="img" src="${api.images}" />
                        <div class="personajes__div">
                            <ul>
                                <li></li>
                                <li>${api.name}</li>
                                <li>${api.ocuppation}</li>
                                <li></li>
                            </ul>
                            <div class="flex">
                                <p class="favorito m-2">Favorito</p>
                                <p class="m-2"><i class="bi bi-heart"></i>Me gusta</p>
                            </div>
                        </div>
                    </div>`;
   /* }*/
    CONST.divBusqueda.innerHTML = `<div class="phil">${pers}</div>`;
}