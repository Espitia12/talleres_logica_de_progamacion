function agendada(nombre) {
    let dia = prompt("ingrese el dia que quiere su servicio");
    let mes = prompt("ingrese el mes que quiere su servicio");
    let año = prompt("ingrese el año que quiere su servicio");
    let agendaEscogida = (nombre + " su cita para el servicio de peluqueria ha quedado agendada para el proximo " +dia+" de "+mes+" de "+año+" con un valor de");
    return agendaEscogida
}


export{agendada}