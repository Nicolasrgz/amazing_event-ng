
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

//task 3

const formulario = document.getElementById("formulario")
const inputBusqueda = document.getElementById('busqueda')
const events = data.events


function armarCheckbocx(objeto) {
  return `<input type="checkbox" id="${objeto.category}" name="checkbox" value="${objeto.category}">
  <label for="${objeto.category}">${objeto.category}</label>`;
}

function imprimirCheckbox(lista, ubicacion) {
  let añadirCategoria = [];
  for (let elemento of lista){
    if (!añadirCategoria.includes(elemento.category)) {
      ubicacion.innerHTML += armarCheckbocx(elemento);
      añadirCategoria.push(elemento.category);
    }
  }
}

imprimirCheckbox(events, formulario)

function filtrarPorTitulo (data, busqueda){
  return data.filter(event => event.name.toLowerCase().includes(busqueda.toLowerCase()))
}

function filtrarPorCategoria(data) {
  let categoriasSeleccionadas = [];
  formulario.querySelectorAll("input[name='checkbox']:checked").forEach((checkbox) => {
    categoriasSeleccionadas.push(checkbox.value);
  });
  return data.filter(event => categoriasSeleccionadas.includes(event.category));
}

inputBusqueda.addEventListener("input", () => {
  let filteredEvents = events; 
    if (inputBusqueda.value) { 
      filteredEvents = filtrarPorTitulo(events, inputBusqueda.value);
    }
  let checkedCheckbox = formulario.querySelectorAll("input[name='checkbox']:checked");
    if (checkedCheckbox.length > 0) { 
      checkedCheckbox.forEach(checkbox => {
        filteredEvents = filtrarPorCategoria(filteredEvents, checkbox.value);
    });
  }

  section.innerHTML = "";
  imprimirDatos(filteredEvents, section);
});


formulario.addEventListener('change', ()=>{
  let filteredEvents = filtrarPorTitulo(events, inputBusqueda.value);
  let checkedCheckbox = formulario.querySelectorAll("input[name='checkbox']:checked");
  if (checkedCheckbox.length === 0) {
    section.innerHTML = "";
    imprimirDatos(events, section);
  } else {
    checkedCheckbox.forEach(checkbox => {
      filteredEvents = filtrarPorCategoria(filteredEvents, checkbox.value);
    });
    section.innerHTML = "";
    imprimirDatos(filteredEvents, section);
  }
});
