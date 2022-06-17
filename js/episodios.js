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
                        <div class="divSelect">
                            <button class="btnFavorito m-2" type="button"><i class="bi bi-star-fill mr-2 perri2"></i></button>
                            <p class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i></p>
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
/*const btnFavorito = document.querySelector('.btnFavorito');
const favorito = document.querySelector('.perri2');
let estadoFavorito = 0;
btnFavorito.addEventListener('click', () => {
if (estadoFavorito === 0){
    favorito.style.color = '#C5C52CFF';
    estadoFavorito = 1;
} else {
    favorito.style.color = 'black';
    estadoFavorito = 0;
}
});*/


/*export function btn (){
    const btnMeGusta = document.querySelector('.btnMeGusta');

    const meGusta = document.querySelector('.perri');

    let estado = 0;

    let contador = 0;

   btnMeGusta.addEventListener('click', () => {
        if (estado === 0){
            meGusta.style.color = 'red';
            estado = 1;
            contador++;
            /!*CONST.estado.innerHTML = 'Me Gusta !!';
            setTimeout(function vacio(){
                CONST.estado.innerHTML = '';
            }, 4000);*!/
        } else {
            meGusta.style.color = 'black';
            estado = 0;
            contador--;
        }
   });


}*/



