const contenedor = document.getElementById('container')
const params = new URLSearchParams( location.search )

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(res => res.json())
.then(data =>{

 let apiEvents = data.events
 let identificador = params.get('id')
 let eventDetails = apiEvents.find(event => event._id == identificador)

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
})
