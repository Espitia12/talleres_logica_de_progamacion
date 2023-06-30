

function empleadosPeluqueria(nombre) {
    while (true) {
        let eleccionEmpleados = parseInt(prompt("Ahora selecciona al empleado que te atendera: 1(Ana) / 2(Claudio)"));
        switch (eleccionEmpleados) {
          case 1:
            return console.log("seleccionaste a Ana para atenderte señor@ ",nombre);
            
          case 2:
            return console.log("seleccionaste a Claudio para atenderte  señor@ ",nombre);
  
          default:
            console.log("No escojiste una de las opciones");
        }
    }

}





function empleadosBaño(nombre) {
    while (true) {
        let eleccionEmpleados = parseInt(prompt("Ahora selecciona al empleado que te atendera: 1(Rosa) / 2(Maria)"));
        switch (eleccionEmpleados) {
          case 1:
            return console.log("seleccionaste a Rosa para atenderte señor@ ",nombre);
            
          case 2:
            return console.log("seleccionaste a Maria para atenderte  señor@ ",nombre);
  
          default:
            console.log("No escojiste una de las opciones");
        }
    }

}




function empleadosVeterinaria(nombre) {
    while (true) {
        let eleccionEmpleados = parseInt(prompt("Ahora selecciona al empleado que te atendera: 1(Raul) / 2(Laura)"));
        switch (eleccionEmpleados) {
          case 1:
            return console.log("seleccionaste a Raul para atenderte señor@ ",nombre);
            
          case 2:
            return console.log("seleccionaste a Laura para atenderte  señor@ ",nombre);
  
          default:
            console.log("No escojiste una de las opciones");
        }
    }

}


export{empleadosPeluqueria, empleadosBaño, empleadosVeterinaria}
