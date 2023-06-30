/* Dado el arreglo de cadenas de ADN [""AATGAAC”, ""GTTTTTC”, ""GGTAAA”, ""CCCCATGGG”]cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola basecadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los elementos del arreglo. */

function obtenerCadenasUnaBase(arregloAdn) {
    let cadenasA = [];
    let cadenasT = [];
    let cadenasC = [];
    let cadenasG = [];
  
    for (let i = 0; i < arregloAdn.length; i++) {
      let cadena = arregloAdn[i];
  
      for (let j = 0; j < cadena.length; j++) {
        let base = cadena[j];
  
        if (base == "A") {
          cadenasA.push(base);
        }
        if (base == "T") {
          cadenasT.push(base);
        }
        if (base == "C") {
          cadenasC.push(base);
        }
        if (base == "G") {
          cadenasG.push(base);
        }
      }
    }
  
    console.log("Cadenas formadas solo de A:", cadenasA);
    console.log("Cadenas formadas solo de T:", cadenasT);
    console.log("Cadenas formadas solo de C:", cadenasC);
    console.log("Cadenas formadas solo de G:", cadenasG);
  }
  
  let arregloAdn = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
  obtenerCadenasUnaBase(arregloAdn);