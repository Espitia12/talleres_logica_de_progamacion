// Dado el arreglo [3, 50, 70, 600, 40]:
let arreglo = [3, 50, 70, 600, 40];

/* 1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos */
arreglo.forEach(i => {
    console.log(i);

})
console.log("_______________________________________________________");


/* 2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3 */

arreglo.forEach(i => {
    console.log(i * 3);

})

console.log("_______________________________________________________");

/* 3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos */

let i = 0

while (i < arreglo.length) {
    
    console.log(arreglo[i]);
    i++
}

console.log("_______________________________________________________");


/* 4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares */

for (let i = 0; i < arreglo.length; i++) {

    if (arreglo[i] % 2 == 0) {
        console.log(arreglo[i]);
    }




}

console.log("_______________________________________________________");


/* 5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo */

let nombre = ["Maria", "Pedro", "Juan", "Pablo", "Diana"]

for (let i = 0; i < nombre.length; i++) {

    if (nombre[i] == "Juan") {
        console.log(nombre[i]);
    }




}

console.log("_______________________________________________________");


/* 6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional, y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el nombre Maria */

nombre = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"]

let contador = 0
for (let i = 0; i < nombre.length; i++) {

    if (nombre[i] == "Maria") {
        contador++
    }




}
console.log(contador);

console.log("_______________________________________________________");



/* 7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora */

let arreglo2 =  [15, 7, 9, 12, 1]
let contador2 = 0

arreglo2.forEach(i => {
    contador2+= i

})

console.log(contador2);

console.log("_______________________________________________________");




/* 8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver cómo se implementa la variable contadora. */

let arreglo3 = [-2, 8, 99, 1, 7]
let contador3 = 0

arreglo3.forEach(i => {
    i = i * i
    contador3+= i

})

console.log(contador3);

console.log("_______________________________________________________");


/* 9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo. Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora. */

let respuesta = [true, true, false, true, false, false] 
let io = 0
let contador4 = 0

while (io < respuesta.length) {
    if (respuesta[io] == false) {
        contador4++
    }

    io++
}

console.log("aparece", contador4);

console.log("_______________________________________________________");

/* 10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la palabra adso. */
let letras = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let formar = "adso";
var posible = true;

for (let i = 0; i < formar.length; i++) {
  let caracterActual = formar[i];

  if (!formar.includes(caracterActual)) {
    posible = false;
    break;
  }
}

if (posible) {
  console.log("Es posible formar la palabra 'adso'");
} else {
  console.log("No es posible formar la palabra 'adso'");
}

console.log("_______________________________________________________");

/* 11. Dado el arreglo [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] use ciclo for para mostrar la tabla del 5 del 10 al 20 , p.e (5x10, 5x11...) */

let arreglo4 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 
let resultado
let x
for (let index = 0; index < arreglo4.length; index++) {
    x = arreglo4[index]

    resultado = 5 * arreglo4[index]
    console.log("5 x",x,resultado);
} 


/* 12. Dado el arreglo [5, 7, 90, 2, 5, 3, 8, 99] use dos ciclos forEach(una dentro del otro) para determinar cuales numeros con consecutivos con otros, p.e. dos a y b son consecutivos si a + 1 = b, p.e. 10 y 11 son consecutivos porque 10 + 1 = 11, 20 y 21 son consecutivos porque 20 + 1 = 21. */

let arreglo6 = [5, 7, 90, 2, 5, 3, 8, 99]

arreglo6.forEach(a => {
    arreglo6.forEach(b => {
        if (a + 1 == b) {
            console.log(a, "y", b ,"Son consecutivos");
        }
    });
});