/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */
const devolverPosicion = function (numeros = [], numero) {
    /* let indexNumber = -1;
    const result = numeros.find(function (value, index) {
        //return value === numero;
        if (value === numero) {
            indexNumber = index;
            return true;
        }
    }); */

    const index = numeros.findIndex(n => n === numero);
    return index;
};

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
console.log(devolverPosicion(arregloFijo, 4));
console.log(devolverPosicion(arregloFijo, 3));
console.log(devolverPosicion(arregloFijo, 30));