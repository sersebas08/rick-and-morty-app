import CONST from "./constant.js";

export function buscarPersonajes() {

    fetch(CONST.url)
        .then(function(response){
            return response.json();})
        .then(function (data){
            leerPersonajes(data);
            console.log('simpson data: ', data);
        })
        .catch(function (err){
            console.log("este es el error", err);})
}

function leerPersonajes(data){
    let appi = data.results;
    console.log('esta es mi appi personajes ', appi);
    let images = '';
    for (let i = 0; i < appi.length; i++) {


      /*  console.log('recorro la data: ', data[i].name)*/
        images += `<div class="personajes">
                         <div class="divSelect">
                            <p class="btnFavorito m-2"><i class="bi bi-star-fill mr-2 perri2"></i></p>
                            <p class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i></p>
                        </div>
                        <h3 class="personaje__h3">${appi[i].name}</h3>
                        <picture class="w-full p-3">
                          <source media="(min-width: 751px)" srcset="${appi[i].image}">
                          <source media="(min-width: 380px)" srcset="${appi[i].image}">
                          <img src="${appi[i].image}" class="img " alt="Mi imagen responsive">
                        </picture>
                        
                        <div class="personajes__div">
                            <ul>
                                <li>${appi[i].status}</li>
                                <li class="liSpecie">${appi[i].species}</li>
                                <!--<li>Nombre</li>
                                <li></li>
                                <li>Ciudad</li>
                                <li>${appi[i].location.name}</li>-->
                                
                                
                            </ul>
                           
                        </div>
                    </div>`;

    }
    CONST.divPersonajes.innerHTML = `<div class="phil">${images}</div>`;
   /* btn();*/
}

