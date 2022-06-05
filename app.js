const main = document.querySelector('#main');
const resultado = document.querySelector('#resultado');

window.addEventListener('offline', event => {
    console.log('Estoy Offline!!');
    /*navbar.classList.add('bg-dark');*/
    main.style.backgroundColor = 'red';
    resultado.classList.add('none');
})

window.addEventListener('online', event => {
    console.log('Estoy online!!');
    /*navbar.classList.remove('bg-dark');*/
})

if (!navigator.onLine){
    console.log('Estoy sin conexion, rey!');
}

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