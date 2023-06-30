/* Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número de Timina (T). Se le debe pedir al usuario que introduzca los arreglos */

function ADN() {
    let arreglos = [];

    let cantidadA = parseInt(prompt("Ingrese la cantidad de cadenas que quiere tener en su arreglo"));

    for (let index = 0; index < cantidadA; index++) {
        let ingresarC = prompt("Ingrese la cadena numero "+ (index+1) +" de su arreglo");

        arreglos.push(ingresarC);
    }

    let cantidadADN = "ACTG";
    let base = true;

    for (let index2 = 0; index2 < arreglos.length; index2++) {
        if (!cantidadADN.includes(arreglos[index2])) {
            base = false;
            break;
        }
        
    }

    let cadenaMasT = "";
    let maximoT = 0;
  
    for (let index = 0; index < arreglos.length; index++) {
      let cadena = arreglos[index];
      let cantidadT = (cadena.match(/T/g) || []).length;
  
      if (cantidadT > maximoT) {
        maximoT = cantidadT;
        cadenaMasT = cadena;
      }
    }

    return cadenaMasT;
}
let resultado = ADN();
console.log("La caden con mas T es: ", resultado);