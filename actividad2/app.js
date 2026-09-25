// Ejercicio de Cajero Automático

let saldo = 1000;
let depositos = 0;
let retiros = 0;
let opcion;

do {
    opcion = parseInt(prompt(
        "CAJERO AUTOMÁTICO\n" +
        "1. Consultar saldo\n" +
        "2. Depositar dinero\n" +
        "3. Retirar dinero\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    ));

    switch (opcion) {

        case 1:
            document.write("Saldo actual: Q" + saldo.toFixed(2) + "<br>");
            break;

        case 2:
            let deposito;

            for (;;) {
                deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));

                if (deposito > 0) {
                    break;
                }

                alert("La cantidad debe ser mayor que 0.");
            }

            saldo = saldo + deposito;
            depositos++;

            break;

        case 3:
            let retiro;

            for (;;) {
                retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));

                if (retiro > 0 && retiro <= saldo) {
                    break;
                }

                alert("Cantidad inválida o saldo insuficiente.");
            }

            saldo = saldo - retiro;
            retiros++;

            break;

        case 4:
            document.write("Saldo final: Q" + saldo.toFixed(2) + "<br>");
            document.write("Cantidad de depósitos: " + depositos + "<br>");
            document.write("Cantidad de retiros: " + retiros + "<br>");
            document.write("Gracias por utilizar nuestro cajero.<br>");
            break;

        default:
            alert("Opción no válida.");
            break;
    }

} while (opcion != 4);