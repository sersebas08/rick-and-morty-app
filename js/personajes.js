import CONST from "./constant.js";

export function buscarPersonajes() {

    fetch(`https://rickandmortyapi.com/api/character`)
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
                          <img src="${appi[i].image}" class="img rounded-full" alt="Mi imagen responsive">
                        </picture>
                        
                        <div class="personajes__div">
                            <ul>
                                <li>Condicion: <span>${appi[i].status}</span></li>
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
/*

export function btn (){
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

    btnFavorito.addEventListener('click', () => {
        if (estadoFavorito === 0){
            favorito.style.color = '#C5C52CFF';
            estadoFavorito = 1;
        } else {
            favorito.style.color = 'black';
            estadoFavorito = 0;
        }
    });
}*/
