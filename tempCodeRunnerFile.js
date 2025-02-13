//Vamos a comenzar la tarea xD =================
console.log("Hola Mundo");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Seleccione una opción: \n1. Ejercicio 1.\n2. Ejercicio 2.\n3. Ejercicio 3.");
rl.question("Ingrese el número de la opción: ", (opcion) => {
    switch(opcion) {
        case "1":
            console.log("Ella no te ama");

            break;
        case "2":


            break;
        case "3":

            break;
    }

});