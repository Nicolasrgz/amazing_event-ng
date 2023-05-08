let miNombre = "nicolas ";
let miApellido = "gonzalez";
let miEdad = 19;
let miMascota = "mateo";
let edadPerro = 5;

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);

let nombreCompleto = (miNombre + miApellido);
console.log(nombreCompleto);

let textoPresentacion = ("mi nombre es: " + miNombre + "y mi apellido: " + 
miApellido + " tengo " + miEdad + " tambien tengo un perro que se llama " + miMascota); 

console.log(textoPresentacion);



const sumaEdades = miEdad + edadPerro;
const restaEdades = miEdad - edadPerro;
const productoEdades = miEdad * edadPerro;
const divisionEdades = miEdad / edadPerro;

console.log("resultado suma: ", sumaEdades);
console.log("resultado resta: ", restaEdades);
console.log("resultado multiplicacion: ", productoEdades);
console.log("resultado de la division: ", divisionEdades);

let textoPresentacion2 = `mi nombre es ${miNombre} y mi apellido ${miApellido}, tengo ${miEdad} mi mascota se llama ${miMascota} y ya tiene cumplidos ${edadPerro} años. si sumamos la edad de mi perro y la mia nos da ${sumaEdades} en cambio al restar nos da: ${restaEdades}, el producto entre ambos numeros nos da ${productoEdades} y la division de ambos ${divisionEdades}`

console.log(textoPresentacion2)