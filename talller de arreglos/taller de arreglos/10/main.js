/* Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que introduzca el arreglo. */

function nombres() {
    let arreglos = []

    let cantidadA = parseInt(prompt("Ingrese la cantidad de nombres que quiere tener en su arreglo"));
    for (let index = 0; index < cantidadA; index++) {
        let ingresarN = prompt("Ingrese el "+ (index+1) +" nombre")

        arreglos.push(ingresarN);
    }

    let ocurrencias = 0;
    for (let index2 = 0; index2 < arreglos.length; index2++) {
        let nombre = arreglos[index2]
        for (let index3 = 0; index3 < nombre.length; index3++) {
            if (nombre[index3] == "c") {
                console.log(nombre);
                ocurrencias++
            }
            
        }
   
    }
    return ocurrencias;
}
let resultado = nombres();
console.log("la cantidad de c que aparecen en los diferentes nombres es: ", resultado);