/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

const validarArreglo = function (numeros = []) {
    if (numeros.length < 6) {
        //return "El arreglo debe tener como minimo 6 elementos";
        return false;
    }

    const sumatoria = numeros.reduce((sumatoria, value) => {
        return sumatoria + value;
    }, 0);

    //console.log(sumatoria);
    return sumatoria > 100;
};
console.log(validarArreglo([1, 2, 3, 4, 5]));
console.log(validarArreglo([1, 2, 3, 4, 5, 6]));
console.log(validarArreglo([10, 20, 30, 40, 50, 3]));