
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

export function onSubmit(it){
    let ite = it;
    db.todo.put({ite, _id: String(Date.now())})
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
                                <h2 class="divPersonajesFavoritos__h3">${todos[i].ite.name}</h2>
                                <picture class="w-full p-3">
                                  <source media="(min-width: 751px)" srcset="${todos[i].ite.image}">
                                  <source media="(min-width: 380px)" srcset="${todos[i].ite.image}">
                                  <img src="${todos[i].ite.image}" class="img " alt="Mi imagen responsive">
                                </picture>
                                <div class="personajes__div">
                                    <ul class="personajes__divUl">
                                        <li><span class="uno">Species: </span>${todos[i].ite.specie}</li>
                                        <li><span class="uno">Status: </span>${todos[i].ite.status}</li>
                                        <li><span class="uno">Origen: </span>${todos[i].ite.origin}</li>
                                        <li><span class="uno">Ubicacion: </span>${todos[i].ite.location}</li>
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