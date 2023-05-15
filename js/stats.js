const table = document.getElementById('table')


let apiEvents
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(res => res.json())
.then(data => {
  apiEvents = data
    printTable(apiEvents.events, table)  
    
})

function armarTable (obj){
    return `                
    <thead id="thead">
    <tr>
    <th>Event with the highest percentage of attendance</th>
    <th>Event with the lowest percentage of attendance</th>
    <th>Event with larger capacity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    </tr>
    <tr>
      <td class="td-op">-</td>
      <td class="td-op">-</td>
      <td class="td-op">-</td>
    </tr>
  </tbody>`
}

function printTable (data, ubicacion){
    for (let elemento of data){
        ubicacion.innerHTML = armarTable(elemento)
    }
}

function assistanceEvents (name, capacidad, assistance){
    return `${name} su porcentaje de asistencia fue de ${(assistance * 100)/capacidad}`  
}
