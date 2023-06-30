/* Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo */

function Norepetiddos() {
    let arreglos = [];

    let cantidadA = parseInt(prompt("Ingrese la cantidad de elementos que va tener su arreglo"));
    for (let index = 0; index < cantidadA; index++) {
        let ingreseN = parseInt(prompt("Ingrese el elemento numero "+ (index+1)+" de su arreglo"))
        
        arreglos.push(ingreseN);
    }

    let Norepetiddos = [];
    for (let index2 = 0; index2 < arreglos.length; index2++) {
        if (!Norepetiddos.includes(arreglos[index2])) {
            Norepetiddos.push(arreglos[index2]); 
        }
        
    }
    Norepetiddos.sort((a, b) => a - b);

    for (let index = 0; index < Norepetiddos.length; index++) {
         Norepetiddos[index];
        
    }
    return Norepetiddos;
}
let resultado = Norepetiddos();
console.log("resultado de numeros ordenados: ",resultado);