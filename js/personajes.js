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
                        <img class="img" src="${appi[i].image}" />
                        <div class="personajes__div">
                            <ul>
                                <li>Specie</li>
                                <li>${appi[i].species}</li>
                                <li>Nombre</li>
                                <li>${appi[i].name}</li>
                                <li>Ciudad</li>
                                <li>${appi[i].location.name}</li>
                                <li>Status</li>
                                <li>${appi[i].status}</li>
                            </ul>
                            <div class="divSelect">
                                <p class="btnFavorito m-2"><i class="bi bi-star-fill mr-2 perri2"></i></p>
                                <p class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i></p>
                            </div>
                        </div>
                    </div>`;

    }
    CONST.divPersonajes.innerHTML = `<div class="phil">${images}</div>`;
    btn();
}

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