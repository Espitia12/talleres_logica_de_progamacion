/* Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de edad. */

function mayoresDeEdad() {
    let cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios:"));
    let mayorEdad = [];
  
    for (let i = 1; i <= cantidadUsuarios; i++) {
      let nombre = prompt("Ingrese el nombre del usuario "+ (i) +" :");
      let edad = parseInt(prompt("Ingrese la edad de "+ (nombre)));
  
      if (edad >= 18) {
        mayorEdad.push(nombre);
      }
    }
  
    console.log("Cantidad de usuarios mayores de edad:", mayorEdad.length);
  
    return mayorEdad;
  }
  
  mayoresDeEdad();