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
    fetch(`https://rickandmortyapi.com/graphql?query=${buscarEpisodios(valorImput)}`, options)
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

            btn();
        }

        CONST.divBusqueda.innerHTML = `<div class="phil">${pers}</div>`;


    function btn (){
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
                /*CONST.estado.innerHTML = 'Me Gusta !!';
                setTimeout(function vacio(){
                    CONST.estado.innerHTML = '';
                }, 4000);*/
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




}


