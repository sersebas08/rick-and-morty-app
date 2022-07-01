
export function modal(data){

    let ventanaHombres = document.querySelector('#ventanaHombres');
    let ventanaHombreModal = document.querySelector('#ventanaHombreModal');

    ventanaHombres.classList.add("modalHombre");
    ventanaHombres.classList.remove("hidden");
    ventanaHombreModal.classList.remove("hidden");
    let html = '';

    html += `<div class="personajesFavoritos">
                    <h2 class="divPersonajesFavoritos__h3">${data.name}</h2>
                    <picture class="w-full p-3">
                      <source media="(min-width: 751px)" srcset="${data.image}">
                      <source media="(min-width: 380px)" srcset="${data.image}">
                      <img src="${data.image}" class="img " alt="Mi imagen responsive">
                    </picture>
                    <div class="personajes__div">
                        <ul class="personajes__divUl">
                            <li><span class="uno">Species: </span>${data.specie}</li>
                            <li><span class="uno">Status: </span>${data.status}</li>
                            <li><span class="uno">Origen: </span>${data.origin}</li>
                            <li><span class="uno">Gender: </span>${data.gender}</li>
                            <li><span class="uno">Type: </span>${data.type}</li>
                            <li><span class="uno">Ubicacion: </span>${data.location}</li>
                        </ul>
                    </div>
                </div>`;

    ventanaHombreModal.innerHTML = html;

    let a = document.createElement('a');
    a.href = '#';
    a.id = 'modal'
    a.innerHTML = 'X';
    a.onclick = function () {

        ventanaHombres.classList.add("hidden");
        ventanaHombreModal.classList.add("hidden");
        ventanaHombres.classList.remove("modalHombre");
        return false;
    }
    ventanaHombres.appendChild(a);
    ventanaHombres.appendChild(ventanaHombreModal);

}