//N°1 | Realizar un programa que permita el ingreso de un número y muestre su tabla de
//multiplicar (Los primeros 10 múltiplos).

// let numero = Number(prompt("dame un valor"))

// console.log(`tabla del numero ${numero}`)

// for (let i = 1; i < 10; i++){
//     if (i < 10){
//         console.log(`${numero} x ${i} = ${numero * i}`)
//     }
   
// }10

//N°2 | Realizar un programa que permita el ingreso de números los cuales se tienen que ir
//acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0. 

// let numeroIngresado = Number(prompt("dame un numero"))

// const numero = [];

// while (numeroIngresado !== 0){
//     numero.push( numeroIngresado )
//     numeroIngresado = Number(prompt("dame un numero"))
// }

// console.log( numero )

//ejercicio 3

// let numeroAdivinar = 19;
// let numero = Number(prompt("dame el numero"))
// let contador = 0;

// while (numero !== numeroAdivinar){
//     contador += 1;
//     if(numero > numeroAdivinar){
//         alert("su numero es mayor")
//         numero = Number(prompt("dame el numero"))
//     }else if (numero < numeroAdivinar){
//         alert("su numero es menor")
//         numero = Number(prompt("dame el numero")) 
//     }
// } 

// alert("has acertado")
// alert(`cantidad de intentos: ${contador}`)


//ejercicio 4

// let numero = Number(prompt("ingrese un numero para saber si es primo o no"))

// for (let i = 2; numero % i === 0;){
//     alert("su numero no es primo, pruebe otro")
//     numero = Number(prompt("ingrese un numero para saber si es primo o no"))
// }

// alert("su numero es primo")

//ejercicio 5

// let numero = Number(prompt("dame un valor"))

// for(let i = 1; i <= numero; i++){
//     if(numero % i === 0){
//         console.log(i)
//     }
// }

// ejercicio 6

// const array = ["1", "2","3", "4","5", "6","7", "8","9", "10"]

// for(let i = 0; i <= 9 ; i++){
//     console.log(`elemento numero: ${array[i]}`)
// }

//ejercicio 7

// const array = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i <= 9 ; i++){
//     console.log(`elemento numero: ${array[i]*2}`)
// }

// ejercicio 8 (incompleto)

// let familia = [ {edad: 18, peso: 50,nombre: "nicolas", club: "boca"}
// , {edad: 70, peso: 60,nombre: "juan", club: "river"}
// , {edad: 6, peso: 30,nombre: "maria", club: "racing"}
// , {edad: 17, peso: 40,nombre: "lara", club: "dyF"}
// , {edad: 60, peso: 80,nombre: "jorge", club: "patronato"}]

// for (let i = 0; i <= 4 ; i++){
//     console.log(`hola mi nombre es ${familia[i].nombre}, tengo ${familia[i].edad} años, y soy hincha de ${familia[i].club}`)
// }

//ejercicio 9

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     console.log(numbers[i]);
//   }
// }


//ejercicio 10

// let numero1= Number(prompt("dame el primer numero: "))
// let numero2= Number(prompt("dame el segundo numero: "))

// while (numero1 !== 0 && numero2 !==0){
//     if((numero1 + numero2) % 2 === 0 ){
//         console.log(`su numero par es ${numero1 + numero2}`)
//         numero1= Number(prompt("dame el primer numero: "))
//         numero2= Number(prompt("dame el segundo numero: "))
//     }else if (numero1 + numero2 !== 0){
//         console.log(`su numero impar es ${numero1 + numero2}`)
//     numero1= Number(prompt("dame el primer numero: "))
//     numero2= Number(prompt("dame el segundo numero: "))
//     }
// }

// alert("deposito 0")

//ejercicio 11

// const numeros = [10,15,30,20,3,4,6,7,11,4];
// let numeroMasGrande = numeros[0];

// for(let i = 1; i < numeros.length; i++){
//   if(numeros[i] > numeroMasGrande){
//     numeroMasGrande = numeros[i];
//   }
// }

// console.log(numeroMasGrande);

// ejercicio 12

// const numeros = [10,15,30,20,3,4,6,7,11,9];
// let numeroMasChico = numeros[0];

// for(let i = 1; i < numeros.length; i++){
//   if(numeros[i] < numeroMasChico){
//     numeroMasChico = numeros[i];
//   }
// }

// console.log(numeroMasChico);

//ejercicio 13

// let nombre = prompt("dame tu nombre:")
// let eleccion = prompt("elige: piedra , papel o tijera")
// let nombre2 = prompt("dame tu nombre:")
// let eleccion2 = prompt("elige: piedra , papel o tijera")

// while(eleccion === eleccion2 && eleccion2 === eleccion){
//     alert ("es un empate, vuelvan a jugar")
//     nombre = prompt("dame tu nombre:")
//     eleccion = prompt("elige: piedra , papel o tijera")
//     nombre2 = prompt("dame tu nombre:")
//     eleccion2 = prompt("elige: piedra , papel o tijera")
//     if(eleccion === eleccion2 && eleccion2 === eleccion){
//         alert("es un empate, vuelvan a jugar")
//     }
// }

// if(eleccion == "piedra" && eleccion2 == "tijera"){
//     alert(`felictaciones ${nombre} has ganado`)
// }else if(eleccion == "tijera" && eleccion2 == "papel"){
//     alert(`felictaciones ${nombre} has ganado`)
// }else if(eleccion == "papel" && eleccion2 == "piedra"){
//     alert(`felictaciones ${nombre} has ganado`)
// }else if(eleccion == "piedra" && eleccion2 == "papel"){
//     alert(`felictaciones ${nombre2} has ganado`)
// }else if(eleccion == "tijera" && eleccion2 == "piedra"){
//     alert(`felictaciones ${nombre2} has ganado`)
// }else if(eleccion == "papel" && eleccion2 == "tijera"){
//     alert(`felictaciones ${nombre2} has ganado`)
// }

// ejercicio 14

// function pyramide(numPisos) {
//     for (let i = 0; i < numPisos; i++) {
//     let piso = '';
//     for (let j = 0; j < i + 1; j++) {
//         piso += '*';
//     }
//     console.log(piso)
//     }
// }
// pyramide(5);

// ejercicio 15

// function pyramid(numPisos) {
//     for (let i = numPisos; i >= 1; i--) {
//       let piso = '';
//       for (let j = 1; j <= i; j++) {
//         piso += '*';
//       }
//       console.log(piso);
//     }
//   }
//   pyramid(5);
  
//ejercicio 16