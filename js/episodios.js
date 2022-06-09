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
                                <li class="uno">Nombre</li>
                                <li>${api.name}</li>
                                <li class="uno">Ocupacion</li>
                                <li>${api.ocuppation}</li>
                                <li class="uno">Especie</li>
                                <li>${api.ocuppation}</li>
                                <li class="uno">Edad</li>
                                <li>${api.ocuppation}</li>
                            </ul>
                            <div class="divSelect">
                                <p class="btnFavorito m-2"><i class="bi bi-star-fill mr-2 perri2"></i>Favorito</p>
                                <p class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i>Me gusta</p>
                            </div>
                        </div>
                    </div>`;
   /* }*/
    CONST.divBusqueda.innerHTML = `<div class="phil">${pers}</div>`;




    const btnMeGusta = document.querySelector('.btnMeGusta');
    const btnFavorito = document.querySelector('.btnFavorito');
    const meGusta = document.querySelector('.perri');
    const favorito = document.querySelector('.perri2');
    let estado = 0;
    let estadoFavorito = 0;
    let contador = 0;

    btnMeGusta.addEventListener('click', () => {
        if (estado === 0){
            meGusta.style.color = 'red';
            estado = 1;
            contador++;
        } else {
            meGusta.style.color = 'black';
            estado = 0;
            contador--;
        }
    });

    btnFavorito.addEventListener('click', () => {
        if (estadoFavorito === 0){
            favorito.style.color = '#C5C52CFF';
            estadoFavorito = 1;
        } else {
            favorito.style.color = 'black';
            estadoFavorito = 0;
        }
    });


}


