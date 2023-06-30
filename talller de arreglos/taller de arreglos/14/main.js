/* Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente. Se le debe pedir al usuario que introduzca el arreglo. */

function OrdenAlfabetico() {
    let arreglo = [];

    let cantidadA = parseInt(prompt("Ingrese la cantidad de letras que va tener su arreglo"));
    for (let index = 0; index < cantidadA; index++) {
        let ingresarL = prompt("Ingresar la letra numero "+ (index+1) +" de su arreglo")
        
        arreglo.push(ingresarL);
    }

    let Norepetiddos = [];
    for (let index2 = 0; index2 < arreglo.length; index2++) {
        if (!Norepetiddos.includes(arreglo[index2])) {
            Norepetiddos.push(arreglo[index2]);            
        }   
    }

    Norepetiddos.sort();
    for (let index3 = 0; index3 < Norepetiddos.length; index3++) {
        Norepetiddos[index3];
        
    }

    return Norepetiddos;
}
let resultado = OrdenAlfabetico();
console.log("Letras en orden alfabetico", resultado);