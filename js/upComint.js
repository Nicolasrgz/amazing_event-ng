
let section = document.getElementById("section")

function armarDiv (objeto){
   return `
        <div class="card" >
            <img class="card-img-top" src="${objeto.image}">
            <div class="card-body">
              <h5 class="card-title">${objeto.name}</h5>
              <p class="card-text">${objeto.description}</p>
            </div>
            <div class="card-body d-flex gap-5">
              <p>price: $${objeto.price}</p>
              <a href="../html/details.html" class="card-link">more info</a>
            </div>
        </div>`
}

function imprimirDatos (lista, ubicacion){
    for (let elemento of lista){
        let fechaEvento = new Date(elemento.date).getTime();
        let fechaLimite = new Date('2023-01-01').getTime();
        if (fechaEvento >= fechaLimite) {
            ubicacion.innerHTML += armarDiv(elemento);
        }
    }
}

imprimirDatos(data.events , section)