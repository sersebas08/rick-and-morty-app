import CONST from "./constant.js";

export const buscarEpisodios = (personaje) => `query {
  characters( filter: { name: "${personaje}" }) {
    info {
      count
    }
    results {
      name
    }
    location(id: 1) {
    id
    }
  }
}`


CONST.btn.addEventListener('click', () => {

    const valorImput = CONST.input.value;
    console.log('lo dejamos para mas tarde ', valorImput)

    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: buscarEpisodios(valorImput)
        })
    }
    fetch("https://rickandmortyapi.com/graphql", options)
        .then(function(response){
            return response.json();})
        .then(function (data){
            CONST.divBusqueda.innerHTML = JSON.stringify(data)
            console.log('futurama data: ', data);
        })
        .catch(function (err){
            console.log("este es el error", err);})
})