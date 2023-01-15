/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = []) {
    return numeros.reduce((sumatoria, value) => {
        return sumatoria + value;
    }, 0);
}
const res = sumatoria([1, 2, 3, 5]);
console.log(res);