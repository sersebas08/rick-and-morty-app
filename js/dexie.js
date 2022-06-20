// db
import CONST from "./constant.js";

let db;

export function init(){
    db = new Dexie("tp-2-pwa");
    /*CONST.input = '';
    CONST.philip = '';*/
    document.body.addEventListener('submit', onSubmit);
    document.body.addEventListener('click', onClick);

    db.version(1).stores({todo: '_id'});
    db.open()
        .then(refreshView);
}






export function onSubmit(e){
    e.preventDefault();
    const valorImput = CONST.input.value;
    /*console.log('evento: ', json.data.characters.results);*/
    db.todo.put({ text: valorImput, _id: String(Date.now())})
        .then(function (){
            CONST.input.value = '';
        })
        .then(refreshView)
}
export function onClick(e){
    let id;
    if(e.target.hasAttributes('id') && e.target.classList.contains('bi-trash')){
        e.preventDefault();
        id = e.target.getAttribute("id");
        db.todo.where('_id').equals(id).delete()
            .then(refreshView)
    }
}
export function refreshView(){
    return db.todo.toArray()
        .then(function (todos){
            let html = '';
            for (let i=0; i < todos.length; i++){
                html += `<div class="personajes">
                        <div class="divSelect">
                            <button class="btnFavorito m-2" type="button"><i class="bi bi-star-fill mr-2 perri2"></i></button>
                            <p class="btnMeGusta m-2"><i class="bi bi-heart-fill mr-2 perri"></i></p>
                            <h2 class="divSelect__h2"><button id="${todos[i]._id}" class="btn btn-link bi bi-trash"></button></h2>
                        </div>
                       <!--picture class="w-full p-3">
                          <source media="(min-width: 751px)" srcset="${todos[i].image}">
                          <source media="(min-width: 380px)" srcset="${todos[i].image}">
                          <img src="${todos[i].image}" class="img " alt="Mi imagen responsive">
                        </picture>-->
                        <div class="personajes__div">
                            <ul class="personajes__divUl">
                                <li class="uno">Nombre</li>
                                <li>${todos[i].text}</li>
                             
                            </ul>
                           
                        </div>
                    </div>`;
            }
            CONST.philipVersion.innerHTML = html;
        })
}