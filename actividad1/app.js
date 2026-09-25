// Sistema de registro de estudiantes

let cantidadEstudiantes = parseInt(prompt("¿Cuántos estudiantes desea registrar?"));

let aprobados = 0;
let reprobados = 0;
let sumaCalificaciones = 0;
let calificacionAlta = 0;
let calificacionBaja = 100;

for (let i = 1; i <= cantidadEstudiantes; i++) {

    let calificacion;

    while (true) {
        calificacion = parseFloat(
            prompt("Ingrese la calificación del estudiante " + i + " (0 - 100):")
        );

        if (calificacion >= 0 && calificacion <= 100) {
            break;
        } else {
            alert("Calificación no válida. Debe estar entre2 0 y 100.");
        }
    }

    if (calificacion >= 60) {
        aprobados++;
    } else {
        reprobados++;
    }

    sumaCalificaciones += calificacion;

    if (calificacion > calificacionAlta) {
        calificacionAlta = calificacion;
    }

    if (calificacion < calificacionBaja) {
        calificacionBaja = calificacion;
    }
}

let promedio = sumaCalificaciones / cantidadEstudiantes;

document.write("Registro de Estudiantes<br><br>");
document.write("Cantidad total de estudiantes: " + cantidadEstudiantes + "<br>");
document.write("Cantidad de estudiantes aprobados: " + aprobados + "<br>");
document.write("Cantidad de estudiantes reprobados: " + reprobados + "<br>");
document.write("Promedio general del grupo: " + promedio.toFixed(2) + "<br>");
document.write("Calificación más alta: " + calificacionAlta + "<br>");
document.write("Calificación más baja: " + calificacionBaja + "<br>");