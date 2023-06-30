function peluqueria() {
    let gato = "40.000"; 
    let perro = "30.000"; 
    let escoje = 0
    while (true) {
      escoje = parseInt(prompt("(perro = 30.000 / gato = 40.000) escribe: 1(perro) / 2(gato) "))
      switch (escoje) {
        case 1:
          return perro;
          
        case 2:
          return gato;

        default:
          console.log("No escojiste una de las opciones validas");
      }
    }

    
}


function baño() {
    let gato = "35.000"; 
    let perro = "25.000"; 
    let escoje = 0
    while (true) {
      escoje = parseInt(prompt("(perro = 25.000 / gato = 35.000) escribe: 1(perro) / 2(gato) "))
      switch (escoje) {
        case 1:
          return perro;
          
        case 2:
          return gato;

        default:
          console.log("No escojiste una de las opciones validas");
      }
    }

    
}



function veterinaria() {
    let consultas = "30.000"; 
    let esterilizacion = "120.000"; 
    let escoje = 0
    while (true) {
      escoje = parseInt(prompt("(Consulta = 30.000 / Esterilizacion = 40.000) escribe: 1(Consulta) / 2(Esterilizacion)"))
      switch (escoje) {
        case 1:
          return consultas;
          
        case 2:
          return esterilizacion;

        default:
          console.log("No escojiste una de las opciones");
      }
    }

    
}



export{peluqueria, baño, veterinaria}