import CONST from "./constant.js";

/*export const buscarPersonajesNombre = (personaje) => `query {
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
}`*/


CONST.btns.addEventListener('click', () => {

   /* const valorImput = CONST.inputs.value;*/
    /*const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: buscarPersonajesNombre(valorImput)
        })
    }*/
    fetch(CONST.urls)
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerPersonajesNombre(data);
            console.log('data episodiso: ', data)
          /*  CONST.input.value = '';*/
        })
        .catch(function (err){
            console.log("este es el error", err);})
});

export function leerPersonajesNombre(data){


    /*let video = '';*/

    /*for (let i = 0; i < data.length; i++) {*/

       /* console.log('episodios: ', json.results.url);*/
        /*  console.log('recorro la data: ', data[i].name)*/
       /* video += `<div class="personajes">
                         
                        <iframe src="${appi}" ></iframe>
                    </div>`;*/

    /*}*/
    /*CONST.divEpisodios.innerHTML = `<div class="phil">${video}</div>`;*/

}
