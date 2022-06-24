import CONST from "./constant.js";

/*export const buscarEpisodiosNombre = (personaje) => `query {
 episodes( filter: { name: "${personaje}" }) {
    results {
      name
      
    }
  }
}`*/


CONST.btns.addEventListener('click', (e) => {
    e.preventDefault();

    const valorImputs = CONST.inputs.value;
    /*const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: buscarEpisodiosNombre(valorImputs)
        })
    }*/
    fetch(`https://rickandmortyapi.com/api/episode`)
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerEpisodiosNombre(data);
            console.log('console: ', valorImputs.value)
            /*if(!valorImputs) {
                CONST.estado.innerHTML = 'Debes escribir el nombre del persnaje !!';
                CONST.input.style.border = '3px solid #a6da2f';
            } else {
                setTimeout(function (){
                    CONST.estado.innerHTML = '';
                    CONST.estado.style.backgroundColor = '';
                    CONST.input.style.border = '';
                    leerEpisodiosNombre(data);
                }, 1000);
                CONST.estado.innerHTML = 'Buscando..';
                CONST.estado.style.backgroundColor = '#d0e995';

            }*/
        })
        .catch(function (err){
            console.log("este es el error", err);})
});
export function leerEpisodiosNombre(json){
    console.log('hola mundo episodios', json)
    /*let appi = json.data.episodes.results;*/
   /* let video = '';

    for (let i = 0; i < json.length; i++) {
        console.log('recorro la data: ', json);


       /!* console.log('episodios: ', json.results.url);*!/
        /!*  console.log('recorro la data: ', data[i].name)*!/
        video += `<div class="personajes">
                         
                        <h2>hola mundo</h2>
                    </div>`;

    }
    CONST.divEpisodios.innerHTML = `<div class="phil">${video}</div>`;*/

}
