// db
import CONST from "./constant.js";

let db;

export function init(){
    db = new Dexie("tp-2-pwa");
    let btnFavorito = document.querySelectorAll('.btnFavorito');
    btnFavorito.forEach(function (itemns){
        itemns.addEventListener('click', onSubmit);
        refreshView();
    })
    document.body.addEventListener('click', onClick);
    db.version(1).stores({todo: '_id'});
    db.open()
        .then(refreshView);
}

export function onSubmit(data){
    let appi = data.data.characters.results;
    db.todo.put({appi, _id: String(Date.now())})
        .then(function (){
            CONST.input.value = '';
        })
        .then(refreshView)
}

export function onClick(e){
    let id;
    if(e.target.hasAttributes("id") && e.target.classList.contains("bi-trash")){
        e.preventDefault();
        id = e.target.getAttribute("id");
        db.todo.where("_id").equals(id).delete()
            .then(refreshView)
    }
}

export function refreshView(){
    return db.todo.toArray()
        .then(function (todos){
            let html = '';

            for (let i=0; i < todos.length; i++){
                html += `<div class="personajesFavoritos">
                                <h2 class="divPersonajesFavoritos__h3">${todos[i].appi[i].name}</h2>
                                <picture class="w-full p-3">
                                  <source media="(min-width: 751px)" srcset="${todos[i].appi[i].image}">
                                  <source media="(min-width: 380px)" srcset="${todos[i].appi[i].image}">
                                  <img src="${todos[i].appi[i].image}" class="img " alt="Mi imagen responsive">
                                </picture>
                                <div class="personajes__div">
                                    <ul class="personajes__divUl">
                                        <li><span class="uno">Species: </span>${todos[i].appi[i].species}</li>
                                        <li><span class="uno">Status: </span>${todos[i].appi[i].status}</li>
                                        <li><span class="uno">Origen: </span>${todos[i].appi[i].origin.name}</li>
                                        <li><span class="uno">Ubicacion: </span>${todos[i].appi[i].location.name}</li>
                                    </ul>
                                </div>
                                 <div class="divSelectFavoritos">
                                    <h3 class="divSelect__h2"><button id="${todos[i]._id}" class="btn btn-link bi bi-trash"></button>Borrar</h3>
                                </div>
                        </div>`;
            }
            CONST.philipVersion.innerHTML = html;
        })
}