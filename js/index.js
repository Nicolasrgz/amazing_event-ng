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
        ubicacion.innerHTML += armarDiv(elemento)
    }
}

imprimirDatos(data.events , section)

const formulario = document.querySelector('#formulario')
const inputBusqueda = document.getElementById('busqueda')

inputBusqueda.addEventListener('input', ()=>{
  const filtrarPorBusqueda = filtrarPorTitulo(data.events, inputBusqueda.value)
  section.innerHTML = ''; 
  imprimirDatos(filtrarPorBusqueda , section); 
})

function filtrarPorTitulo (data, busqueda){
  return data.filter(event => event.name.toLowerCase().includes(busqueda.toLowerCase()))
}

formulario.addEventListener('change', ()=>{
  const filtrarPorBusqueda = filtrarPorTitulo(data.events, inputBusqueda.value)
  imprimirDatos(filtrarPorBusqueda , section); 
})

function filtrarPorCategoria (data){
  return data.filter(event => event.category)
}