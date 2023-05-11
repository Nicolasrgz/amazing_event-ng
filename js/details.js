const contenedor = document.getElementById('container')
const evento = data.events
const params = new URLSearchParams( location.search )
let identificador = params.get('id')
const eventDetails = evento.find(events => events.id == identificador)

document.title = `details of ${eventDetails.name}`

contenedor.innerHTML = `<div class="flex-container-details">
<div class="img-details">
 <img class="img-d" src="${eventDetails.image}">
</div>
<div class="datos-details">
 <h3 class="h5-p">${eventDetails.name}</h3>
 <h4 class="h5-p">${eventDetails.date}5</h4>
 <h5 class="h5-p">${eventDetails.description}</h5>
 <h4 class="h5-p">${eventDetails.category}</h4>
 <h5 class="h5-p">${eventDetails.capacity}</h5>
 <h3 class="h5-p">${eventDetails.price}</h3>
</div>
</div>`