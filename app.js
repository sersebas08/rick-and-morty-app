const main = document.querySelector('#main');
const resultado = document.querySelector('#resultado');
const estado = document.querySelector('#estado');

window.addEventListener('offline', event => {
    estado.innerHTML = 'Estas navegando sin conexion a la red';
    estado.style.backgroundColor = 'red';

})

window.addEventListener('online', event => {
    estado.innerHTML = '';
})

if (!navigator.onLine){
    console.log('Sin conexion');
}



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
    resultado.innerHTML = `<div class="phil">
                                <p>Nombre: ${dataAppi.name}</p>
                                <img src="${dataAppi.images}"  alt="iconos_del_tiempo_actual">
                                  
                            </div>`;
}

buscarSimpson();