const table1 = document.getElementById('table-1');
const table2 = document.getElementById('table-2')
const table3 = document.getElementById('table-3')

let apiEvents;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(res => res.json())
  .then(data => {
    apiEvents = data;
    const eventoMayorAsistencia = calcularPorcentajeMayor(apiEvents.events.map(event => event.name), apiEvents.events.map(event => event.assistance), apiEvents.events.map(event => event.capacity));
    const eventoMenorAsistencia = calcularMenorPorcentaje(apiEvents.events.map(event => event.name), apiEvents.events.map(event => event.assistance), apiEvents.events.map(event => event.capacity));
    const eventoConMayorCapacidad = mayorAsistencia(apiEvents.events.map(event => event.name), apiEvents.events.map(event => event.capacity));
    const datosUp = imprimirDatosUp(apiEvents.events);
    
    //const datosPast = imprimirDatosPast(apiEvents.events)
    estructuraTable1(eventoMayorAsistencia, eventoMenorAsistencia, eventoConMayorCapacidad);
  });
  
  function calcularPorcentajeMayor(name, asistencia, capacidad) {
    let arrayDeDatos = [];
    for (let i = 0; i < apiEvents.events.length; i++) {
      if ( !isNaN(capacidad[i])) {
        let porcentaje = (asistencia[i] * 100) / capacidad[i];
        let elemento = { name: name[i], porcentaje: porcentaje };
        arrayDeDatos.push(elemento);
      }}
    
    const eventoMayorAsistencia = arrayDeDatos.reduce((max, current) => {
      return current.porcentaje > max.porcentaje ? current : max;
    });

  return ((eventoMayorAsistencia.name + " : " + eventoMayorAsistencia.porcentaje.toFixed(2) + "%"))
  }
  
  function calcularMenorPorcentaje(name, asistencia, capacidad) {
    let arrayDeDatos = [];
    for (let i = 0; i < apiEvents.events.length; i++) {
      if (!isNaN(capacidad[i])) {
        let porcentaje = (asistencia[i] * 100) / capacidad[i];
        let elemento = { name: name[i], porcentaje: porcentaje };
        arrayDeDatos.push(elemento);
      }
    }
    
    const eventoMenorAsistencia = arrayDeDatos.reduce((min, current) => {
      return current.porcentaje < min.porcentaje ? current : min;
    });
    
     return (eventoMenorAsistencia.name + ": " + eventoMenorAsistencia.porcentaje.toFixed(2) + "%");
  }
  
  function mayorAsistencia(name, capacidad) {
    let arrayDeDatos = [];
    for (let i = 0; i < apiEvents.events.length; i++) {
      if (capacidad[i]) {
        let elemento = { name: name[i], capacity: capacidad[i] };
        arrayDeDatos.push(elemento);
      }
    }
    
    const mayorCapacidad = arrayDeDatos.sort((a, b) => b.capacity - a.capacity);
    if (mayorCapacidad.length > 0) {
      const eventoConMayorCapacidad = mayorCapacidad[0];
      return (eventoConMayorCapacidad.name + ": " + eventoConMayorCapacidad.capacity);
    }
  }

  function estructuraTable1(eventoMayorAsistencia, eventoMenorAsistencia, mayorCapacidad) {
    let estructura = `
      <tr>
        <th>Event with the highest % of attendance</th>
        <th>Event with the lowest % of attendance</th>
        <th>Event with larger capacity</th>
      </tr>
      <tr>
        <td>${eventoMayorAsistencia}</td>
        <td>${eventoMenorAsistencia}</td>
        <td>${mayorCapacidad}</td>
      </tr>
    `;

    table1.innerHTML = estructura;
  }
  //upcoming tiene 19 eventos
  function imprimirDatosUp(data) {
    let datosFiltrados = [];
  
    for (let elemento of data) {
      let fechaEvento = new Date(elemento.date).getTime();
      let fechaLimite = new Date(apiEvents.currentDate).getTime();
  
      if (fechaEvento > fechaLimite) {
        const categoria = elemento.category;
  
      if (!datosFiltrados[categoria]) {
        datosFiltrados[categoria] = [];
      }
      datosFiltrados[categoria].push(elemento);
      

    }
  }
  console.log(datosFiltrados)
  return datosFiltrados;
}

function estructura2 (categoria, ingreso, porcentaje ) {
  return `

  <tbody>
  <tr>
    <td>${categoria}</td>
    <td>${ingreso}</td>
    <td>${porcentaje}</td>
  </tr>
  </tbody>
`
}





    //past tiene 18 eventos 
// function imprimirDatosPast (lista){
//   let datosFiltrados = [];
//   for (let elemento of lista){
//       let fechaEvento = new Date(elemento.date).getTime();
//       let fechaLimite = new Date(apiEvents.currentDate).getTime();

//       if (fechaEvento < fechaLimite) {
//         const categoria = elemento.category

//       if (!datosFiltrados[categoria]){
//         datosFiltrados[categoria] = [];
//       }
//       datosFiltrados[categoria].push(elemento);  
//     }
//   }
//    console.log(datosFiltrados)
//    return datosFiltrados
// }