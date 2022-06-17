
import CONST from "./js/constant.js";
import {buscarEpisodios} from "./js/episodios.js";
import {buscarPersonajes} from "./js/personajes.js";
/*import {btn} from "./js/episodios.js";*/


window.addEventListener('DOMContentLoaded', (e) => {
    buscarEpisodios();
    buscarPersonajes();
   /* btn();*/
    init();
});
// db
let db;

function init(){
    db = new Dexie("tp-2-pwa");
    /*CONST.input = '';
    CONST.philip = '';*/
    document.body.addEventListener('submit', onSubmit);
    document.body.addEventListener('click', onClick);

    db.version(1).stores({todo: '_id'});
    db.open()
        .then(refreshView);
}

function onSubmit(e){
    e.preventDefault();
   console.log('evento: ', e);
   db.todo.put({ text: CONST.input.value, _id: String(Date.now())})
       .then(function (){
           CONST.input.value = '';
       })
       .then(refreshView)
}
function onClick(e){
    let id;
    if(e.target.hasAttributes('id') && e.target.classList.contains('bi-trash')){
        e.preventDefault();
        id = e.target.getAttribute("id");
        db.todo.where('_id').equals(id).delete()
            .then(refreshView)
    }
}
function refreshView(){
    return db.todo.toArray()
        .then(function (todos){
            let html = '';
            for (let i=0; i < todos.length; i++){
                html += `<h2><button id="${todos[i]._id}" class="btn btn-link bi bi-trash"></button>${todos[i].text}</h2>`;
            }
            CONST.philip.innerHTML = html;
        })
}


// botones del menu

CONST.btnHome.addEventListener('click', () => {
    CONST.divHome.classList.remove('hidden');
    CONST.divPersonajes.classList.add('hidden');
    CONST.divEpisodios.classList.add('hidden');
})
CONST.btnPersonajes.addEventListener('click', () => {
    CONST.divPersonajes.classList.remove('hidden');
    CONST.divEpisodios.classList.add('hidden');
    CONST.divHome.classList.add('hidden');
})
CONST.btnEpisodios.addEventListener('click', () => {
    CONST.divEpisodios.classList.remove('hidden');
    CONST.divPersonajes.classList.add('hidden');
    CONST.divHome.classList.add('hidden');
})


window.addEventListener('offline', event => {
    CONST.estado.innerHTML = 'Estas navegando sin conexion a la red';
    CONST.estado.style.backgroundColor = 'rgb(175 220 40)';

})

window.addEventListener('online', event => {
    setTimeout(function (){
        CONST.estado.innerHTML = '';
        CONST.estado.style.backgroundColor = '';
    }, 4000);
    CONST.estado.innerHTML = 'Estas Conectado ...';
    CONST.estado.style.backgroundColor = '#d0e995';
})

if (!navigator.onLine){
    console.log('Sin conexion');
}



// ventana modal
/*function modal(){
    console.log('hasta llego: ' );

    /!* console.log('esta es la data de cafeteria: ' , );*!/
    ventanaHombres.classList.add("modalHombre");
    ventanaHombres.classList.remove("hidden");


    let a = document.createElement('a');
    a.href = '#';
    a.id = 'modal'
    a.innerHTML = 'X';
    a.onclick = function () {

        ventanaHombres.classList.add("hidden");
        ventanaHombres.classList.remove("modalHombre");
        return false;
    }
    ventanaHombres.appendChild(a);
    console.log('hola mundo')

}
let ventanaHombres = document.querySelector('#ventanaHombres');
let button = document.querySelector('.button');
button.onclick = modal;*/


