// Tienda de tecnología

let nombre = prompt("Ingrese el nombre del cliente:");
let edad = parseInt(prompt("Ingrese la edad del cliente:"));

let tipo = parseInt(prompt(
    "Seleccione el tipo de cliente:\n" +
    "1. Estudiante\n" +
    "2. Empleado\n" +
    "3. Cliente general\n"
));

let tipoCliente;

switch (tipo) {
    case 1:
        tipoCliente = "Estudiante";
        break;

    case 2:
        tipoCliente = "Empleado";
        break;

    case 3:
        tipoCliente = "Cliente general";
        break;

    default:
        tipoCliente = "Cliente general";
        break;
}

let total = 0;
let cantidadProductos = 0;
let continuar;

do {
    let producto = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad:"));

    let costo = precio * cantidad;

    total = total + costo;
    cantidadProductos++;

    continuar = prompt("¿Desea agregar otro producto? Escriba SI o NO:");

} while (continuar.toUpperCase() == "SI");

// Descuento por tipo de cliente
let descuentoTipo = 0;

switch (tipo) {
    case 1:
        descuentoTipo = total * 0.05;
        break;

    case 2:
        descuentoTipo = total * 0.10;
        break;

    case 3:
        descuentoTipo = 0;
        break;
}

// Descuento adicional
let descuentoAdicional = 0;

if (total > 1000) {
    descuentoAdicional = total * 0.10;
} else if (total > 500) {
    descuentoAdicional = total * 0.05;
}

let totalDescuentos = descuentoTipo + descuentoAdicional;
let totalPagar = total - totalDescuentos;

// Mostrar resumen
document.write("RESUMEN DE LA COMPRA<br><br>");
document.write("Nombre del cliente: " + nombre + "<br>");
document.write("Edad: " + edad + "<br>");
document.write("Tipo de cliente: " + tipoCliente + "<br>");
document.write("Cantidad de productos: " + cantidadProductos + "<br>");
document.write("Subtotal: Q" + total.toFixed(2) + "<br>");
document.write("Descuento por tipo de cliente: Q" + descuentoTipo.toFixed(2) + "<br>");
document.write("Descuento adicional: Q" + descuentoAdicional.toFixed(2) + "<br>");
document.write("Total de descuentos: Q" + totalDescuentos.toFixed(2) + "<br>");
document.write("Total a pagar: Q" + totalPagar.toFixed(2) + "<br><br>");
document.write("Compra realizada correctamente.<br>");
document.write("Gracias por su compra, " + nombre + ".");
