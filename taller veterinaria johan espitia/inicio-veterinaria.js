import { peluqueria, baño, veterinaria } from "./servicios.js";
import { empleadosPeluqueria, empleadosBaño, empleadosVeterinaria } from "./empleado-servicios.js";
import { agendada } from "./agenda.js";


function main() {
  let nombre = prompt("Ingrese su nombre");
  let seleccionServicio = parseInt(prompt("Ingrese: 1 (peluqueria), 2 (baño), 3 (veterinaria)"));

  switch (seleccionServicio) {
    case 1:
      
      empleadosPeluqueria(nombre);
      console.log(agendada(nombre),peluqueria());

      break;
    case 2:

      empleadosBaño(nombre);
      console.log(agendada(nombre),baño());

      break;
    case 3:

      empleadosVeterinaria(nombre);
      console.log(agendada(nombre),veterinaria());

      break;
    default:
      console.log("No escogio una opcion valida");
      break;
  }
}

main();

