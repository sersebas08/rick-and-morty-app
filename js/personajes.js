import CONST from "./constant.js";

export function buscarPersonajes() {

    fetch(`https://api.sampleapis.com/futurama/characters`)
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerPersonajes(data);
           /* console.log('simpson data: ', data);*/
        })
        .catch(function (err){
            console.log("este es el error", err);})
}

function leerPersonajes(data){
    let images = '';
    for (let i = 0; i < data.length; i++) {
      /*  console.log('recorro la data: ', data[i].name)*/
        images += `<div class="personajes">
                        <img class="img" src="${data[i].images.main}" />
                        <div class="personajes__div">
                            <ul>
                                <li>${data[i].species}</li>
                                <li>${data[i].name.first},   <span>${data[i].name.last}</span></li>
                                <li>${data[i].occupation}</li>
                                <li>${data[i].age}</li>
                            </ul>
                            <div class="flex">
                                <p class="favorito m-2">Favorito</p>
                                <p class="m-2"><i class="bi bi-heart"></i>Me gusta</p>
                            </div>
                        </div>
                    </div>`;
    }
    CONST.divPersonajes.innerHTML = `<div class="phil">${images}</div>`;
}