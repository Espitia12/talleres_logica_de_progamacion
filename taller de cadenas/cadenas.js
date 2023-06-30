/*Taller
1.Dada la cadena “Javascript es un buen lenguaje”:
a) Leer e imprimir los elementos de índices 3, 6, 8
b) Recorra la cadena usando ciclo for

let cadena = "Javascript es un buen lenguaje";


console.log(cadena[3]);
console.log(cadena[6]);
console.log(cadena[8]);


for (let i = 0; i < cadena.length; i++) {
  console.log(cadena[i]);
}

*/


/*2.Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”.

let cadena = "Somos SENA";
let contieneE = false;
let contadorO = 0;


for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === "E" || cadena[i] === "e") {
    contieneE = true;
    break;
  }
}


for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === "o" || cadena[i] === "O") {
    contadorO++;
  }
}

console.log("contiene 'E': " + contieneE);
console.log("La letra 'o' aparece " + contadorO + " veces.");*/

/*3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.*/

let cadena = "Javascript es genial";
let contadorPalabras = 0;


for (let i = 0; i < cadena.length; i++) {

  if (cadena[i] === " ") {

    contadorPalabras++;
  }
}


contadorPalabras++;

console.log("la cantidad de palabras es: " + contadorPalabras);


