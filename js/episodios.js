import CONST from "./constant.js";

export const buscarEpisodiosNombre = (personaje) => `query {
 episodes( filter: { name: "${personaje}" }) {
     results{
          name
          id
          episode
          air_date
        }
  }
}`

CONST.btns.addEventListener('click', (e) => {
    e.preventDefault();

    const valorImputs = CONST.inputs.value;
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: buscarEpisodiosNombre(valorImputs)
        })
    }
    fetch(`https://rickandmortyapi.com/graphql?query=${buscarEpisodiosNombre(valorImputs)}`, options)
        .then(function(response){
            return response.json();})
        .then(function (data){
            if(!valorImputs) {
                CONST.estado.innerHTML = 'Debes escribir el nombre del persnaje !!';
                CONST.inputs.style.border = '3px solid #a6da2f';
            } else {
                setTimeout(function (){
                    CONST.estado.innerHTML = '';
                    CONST.estado.style.backgroundColor = '';
                    CONST.inputs.style.border = '';
                    leerEpisodiosNombre(data);
                }, 1000);
                CONST.estado.innerHTML = 'Buscando..';
                CONST.estado.style.backgroundColor = '#d0e995';
            }
            CONST.inputs.value = '';
        })
        .catch(function (err){
            console.log("este es el error", err);})
});
export function leerEpisodiosNombre(json){
    let pers = '';
    let app = json.data.episodes.results;
        for (let i = 0; i < app.length; i++) {

        pers += `<div class="personajesFavoritos">
                    
                        <div class="personajes__div">
                            <ul class="personajes__divUl">
                                <li><span class="uno">Nombre </span>${app[i].name}</li>
                                <li><span class="uno">Episodios </span>${app[i].episode}</li>
                                <li><span class="uno">Al aire </span>${app[i].air_date}</li>
                                
                            </ul>
                           
                        </div>
                    </div>`;

    }
    CONST.vistaEpisodios.innerHTML = `<div class="phil">${pers}</div>`;

}
