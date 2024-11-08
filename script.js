function compararNumeros() {
    // ingresa los numeros
    let primerNumero = parseFloat(prompt("Por favor, ingresa el primer número:"));
    let segundoNumero = parseFloat(prompt("Por favor, ingresa el segundo número:"));
    let tercerNumero = parseFloat(prompt("Por favor, ingresa el tercer número:"));

    // Si son iguales
    if (primerNumero === segundoNumero && segundoNumero === tercerNumero) {
        console.log("Todos los números son iguales.");
        return; 
    }

    // Crear un arreglo 
    let arregloNumeros = [primerNumero, segundoNumero, tercerNumero];

    // Ordenar de mayor a menor
    let ordenDescendente = [...arregloNumeros].sort((a, b) => b - a);
    // Ordenar de menor a mayor
    let ordenAscendente = [...arregloNumeros].sort((a, b) => a - b);

    // Mostrar en consola
    console.log( ordenDescendente.join(", "));
    console.log( ordenAscendente.join(", "));
}

compararNumeros();