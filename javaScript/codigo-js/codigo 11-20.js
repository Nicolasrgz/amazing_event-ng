//ejercicio 11
const alumno = {
    nombre: "nicolas",
    apellido: "gonzalez",
    edad: 19,
    peso: 75,
    nacionalidad: "argentino"
}

console.table(alumno);

console.log("nombre:" ,alumno.nombre);
console.log("apellido:" ,alumno.apellido);
console.log("edad:" ,alumno.edad);
console.log("peso:" ,`${alumno.peso}kg`);
console.log("nacionalidad:" ,alumno.nacionalidad);

//ejercicio 12

const mascota = {
    nombre: "mateo",
    color: "marron",
    edad: 5,
    peso: 20,
    reza: "boxer"
}

console.table(alumno);

console.log("nombre:" ,alumno.nombre);
console.log("color:" ,alumno.color);
console.log("edad:" ,alumno.edad);
console.log("peso:" ,`${alumno.peso}kg`);
console.log("raza:" ,alumno.raza);

//ejercio 13

const fruta = ["manzana", "pera", "banana", "arandano", "uva"]

console.log(fruta)

console.log(fruta[0])
console.log(fruta[1])
console.log(fruta[2])
console.log(fruta[3])
console.log(fruta[4])

//ejercicio 14

const numeros = ["1", "2", "3", "4", "5"]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//ejercicio 15

const familia = ["lara", "seba", "guadalupe", "diego", "manu"]

console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

//ejercicio 16

let textoAleatorio = `a mi me gusta la ${fruta[1]}, por la mañana tengo ${numeros[3]}hs de clases y mi hermano mayor se llama ${familia[4]}`;

console.log(textoAleatorio);

//ejercicio 17

// let miEdad = prompt("¿cual es tu edad?");
// let edadCompañero = prompt("¿cual es la edad de tu compañero?");

// if(miEdad == edadCompañero){
//     console.log("mi edad es igual a la de mi compañero")
// }else if(miEdad > edadCompañero){
//     console.log("mi edad es mayor a la de mi compañero")
// }else if (miEdad < edadCompañero){
//     console.log("mi edad es menor a la de mi compañero")
// }else{
//     console.log("inserte un valor numerico")
// }

//ejercicio 18

// let edadYo = prompt("¿cual es tu edad?");
// let soyMayorDeEdad = 18

// if(edadYo == soyMayorDeEdad){
//     console.log(` Soy mayor de edad tengo ${soyMayorDeEdad}`)
// }else if(edadYo > soyMayorDeEdad){
//     console.log(`Soy mayor de edad tengo tengo mas de ${soyMayorDeEdad}`)
// }else{
//     console.log("sos menor.")
// }

//ejercicio 19

let edad = prompt("¿cual es tu edad?")
let altura = prompt("¿cuanto mides (en cm)?")

