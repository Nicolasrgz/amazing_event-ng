//ejercicio 1

// let numero1 = prompt("primer numero:");
// let numero2 = prompt("segundo numero:");

// if (numero1 > numero2){
//     console.log("el primer numero es mayor")
// }else{
//     console.log("el primer numero no es mayor que el segundo")
// }

//ejercicio 2


// let numero1 = prompt("primer numero:");
// let numero2 = prompt("segundo numero:");

// if (numero1 == numero2){
//     console.log("los dos numeros son iguales")
// }else{
//     console.log("los dos numeros son distintos")
// }

//ejercicio 3

// let numero1 = prompt("primer numero:");
// let numero2 = prompt("segundo numero:");

// if (numero1 == numero2){
//     console.log("los dos numeros son iguales")
// }else if (numero1 > numero2){
//     console.log("el primer numero es mayor")
// }else if (numero1 < numero2){
//     console.log("el segundo numero es mayor")
// }else{
//     alert("inserte un numero")
// }

//ejercicio 4

// let numero1 = prompt("primer numero:");
// let numero2 = prompt("segundo numero:");
// let numero3 = prompt("tercer numero:")

// if (numero1 > numero2 && numero1 > numero3 ){
//     console.log(`el numero: ${numero1} es mayor`)
// }else if (numero2 > numero1 && numero2 > numero3){
//     console.log(`el numero: ${numero2} es mayor`)
// }else if (numero3 > numero1 && numero3 > numero2){
//     console.log(`el numero: ${numero3} es mayor`)
// }else{
//     alert("inserte numeros")
// }

//ejercicio 5

// const persona1 = {
//     nombre: "juan",
//     edad: 20,
//     altura: 180
// }

// const persona2 = {
//     nombre: "nicolas",
//     edad: 25,
//     altura: 176
// }

// if(persona1.altura > persona2.altura){
//     console.log(`${persona1.nombre} es mas alto`)
// } else if(persona2.altura > persona1.altura) {
//     console.log(`${persona2.nombre} es mas alto`)
// }

// if (persona1.edad > persona2.edad){
//     console.log(`${persona1.nombre} tiene mayor edad`)
// } else if (persona2.edad > persona1.edad){
//     console.log(`${persona2.nombre} tiene mayor edad`)
// }

//ejercicio 6

// let nombre = prompt("inserte su nombre:")
// let edad = prompt("inserte su edad:")
// let altura = prompt("inserte su altura:")
// let vision = prompt("inserte su vision (en mts):")

// if (edad >= 18 &&  altura >= 150 && vision >= 8){
//     alert(`FELICITACIONES! ${nombre}, estas capacitado para conducir`)
// }else {
//     alert(`${nombre} lo sentimos no estas capacitado para conducir`)
// }

//ejercicio 7

// let nombre = prompt("inserte nombre:")
// let pase = prompt("¿tiene pase vip o normal?")
// let entrada = prompt("¿posee entradas?(SI/NO)")

// let miNombre = "nicolas"

// if (nombre == miNombre || pase == "vip"){
//     alert("felicitaciones tienes acceso")
// } else if (entrada == "SI"){
//    let usar = prompt("¿desa utilizarla?(si/no)")
//    if(usar = "si"){
//     alert("felicitaciones tienes acceso")
//    }
// } else if (entrada = "no"){
//     let comprarEntrada = prompt("¿desea comprar entrada?(SI/NO)")
//     if(comprarEntrada = "SI"){
//         let dineroDisponible = prompt("¿cuanto dinero posee?")
//         if(dineroDisponible >= 1000){
//             alert("has comprado una entrada, felicitaciones tienes acceso")
//         }else if(dineroDisponible < 1000){
//             alert("venta rechazada")
//         }else{
//             alert("si se arrepiente vuelva")
//         }
//     }
// }

//ejercicio 8

// let numeroIncognita = 6;

// let primerIntento = prompt("vamos con tu primer intento")

// if(primerIntento > 6){
//     alert("el numero ingresado es mayor, vuelve a intentarlo")
// } else if (primerIntento < 6 ){
//     alert("el numero ingresado es menor, vuelve a intentarlo")
// }else if(segundoIntento == 6){
//     alert("Ganaste, has adivinado el número")
// }else{
//     alert("inserte un valor")
// }

// let segundoIntento = prompt("vamos con el segundo intento, dame un valor")

// if(segundoIntento > 6){
//     alert("el numero ingresado es mayor, vuelve a intentarlo")
// } else if (segundoIntento < 6){
//     alert("el numero ingresado es menor, vuelve a intentarlo")
// }else if(segundoIntento == 6){
//     alert("Ganaste, has adivinado el número")
// }else {
//     alert("inserte un valor")
// }

// let tercerIntento = prompt("ultima oportunidad:")

// if(tercerIntento > 6){
//     alert("el numero ingresado es mayor, vuelve a intentarlo")
// } else if (tercerIntento < 6){
//     alert("el numero ingresado es menor, vuelve a intentarlo")
// }else if(tercerIntento == 6){
//     alert("Ganaste, has adivinado el número")
// }else {
//     alert("inserte un valor")
// }

//ejercicio 9

// let edad = prompt("inserte su edad en valor numerico:")

// if (edad >= 0 && edad <= 12){
//     alert("eres un infante")
// } else if (edad >= 13 && edad <= 18){
//     alert("eres un adolescente")
// }else if (edad >= 19 && edad <= 45){
//     alert("eres un mayor joven")
// }else if(edad > 45 && edad <= 100){
//     alert("eres un anciano")
// } else if (edad > 100){
//     alert("¿en realidad tienes esa edad?")
// }

//ejercicio 10

// let jugador1 = prompt("jugador 1: piedra , papel o tijeras")
// let jugador2 = prompt("jugador 2: piedra , papel o tijeras")

// if(jugador1 == "piedra" && jugador2 == "tijeras"){
//     alert("jugador 1 ha ganado!")
// }else if(jugador1 == "papel" && jugador2 == "piedra"){
//     alert("jugador 1 ha ganado")
// }else if (jugador1 == "tijeras" && jugador2 == "papel"){
//     alert("jugador 1 ha ganado")
// }else if(jugador2 == "piedra" && jugador1 == "tijeras"){
//     alert("jugador 2 ha ganado!")
// }else if(jugador2 == "papel" && jugador1 == "piedra"){
//     alert("jugador 2 ha ganado")
// }else if (jugador2 == "tijeras" && jugador1 == "papel"){
//     alert("jugador 2 ha ganado")
// }else{
//     alert("deposite un valor correcto")
// }

//ejercicio 11

// const color = prompt("inserte un color")

// switch (color) {
//     case "blanco":
//         alert("Falta de color")
//         break;
//      case "negro":
//         alert("Falta de color")
//         break;
//      case "verde":
//         alert("El color de la naturaleza.")
//         break;
//      case "azul":
//         alert("El color del agua")
//         break;
//      case "amarillo":
//         alert(" El color del sol")
//         break;
//      case "rojo":
//         alert(" El color del fuego")
//         break;
//      case "marron":
//         alert("el color de la tierra")
//         break;
//     default:
//         alert("Excelente elección, no lo teníamos pensado")
//         break;
// }

//ejercicio 12

// let operacion = prompt("suma, resta, producto, division")
// let numero1 = prompt("primer numero")
// let numero2 = prompt("segundo numero")

// if(operacion === "suma"){
//     let suma = Number(numero1) + Number(numero2)
//     alert(`el resultado de su suma es: ${suma}`)
// } else if (operacion === "resta"){
//     let resta = Number(numero1) - Number(numero2)
//     alert(`el resultado de su resta es: ${resta}`)
// } else if (operacion === "producto"){
//     let producto = Number(numero1) * Number(numero2)
//     alert(`el resultado de su multiplicacion es ${producto}`)
// }else if(numero2 == 0) {
//     alert("error ingrese otro valor en el divisior")
// }else if(operacion === "division"){
//     let division = Number(numero1) / Number(numero2)
//     alert(`el resultado de su division es: ${division}`)
// }else{
//     alert("no se ha encontrado")
// }

// ejercicio 13

// let apellido = prompt("inserte su apellido:")
// let nombres = prompt("ingrese su nombre o nombres:")
// let sexo = prompt("ingrese su sexo:")
// let nacionalidad = prompt("ingrese su nacionalidad:")
// let fechaDeNacimiento = prompt("ingresu fecha de nacimiento: xx/xx/xx ")
// let numeroDni = prompt("ingrese su numero de DNI")

// let datos = prompt(`¿estos datos son correctos? apellido: ${apellido}, nombre: ${nombres}, sexo: ${sexo}, nacionalidad: ${nacionalidad}
// fecha de nacimiento: ${fechaDeNacimiento}, D.N.I: ${numeroDni}`)

// if (datos == "si"){
//     const DNI = {
//         apellido: `${apellido}`,
//         nombres: `${nombres}`,
//         sexo: `${sexo}`,
//         nacionalidad: `${nacionalidad}`,
//         fechaDeNacimiento: `${fechaDeNacimiento}`,
//         Dni: `${numeroDni}`,
//     }
//     console.table(DNI)
//     console.log ("registro exitoso")
// }else if (datos == "no"){
//     alert("vuelva a intentarlo en un mes")
// }