const main = document.querySelector('#main');
const resultado = document.querySelector('#resultado');



main.style.backgroundColor = 'orange';

function buscarSimpson() {

    fetch(`https://api.sampleapis.com/futurama/characters`)
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

    let dataAppi = {
        name:  data[0].name.first,
        images: data[0].images.main
    };
    resultado.innerHTML = `<div class="">
                                <p>Nombre: ${dataAppi.name}</p>
                                <img src="${dataAppi.images}"  alt="iconos_del_tiempo_actual">
                                  
                            </div>`;
}

buscarSimpson();