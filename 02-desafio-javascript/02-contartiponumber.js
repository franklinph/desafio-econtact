/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */
const contarTipoNumber = function(arreglo = []) {
    let cantNumbers = 0;
    arreglo.forEach(function (value) {
        if (typeof value === "number") {
            cantNumbers++;
        }
    });
    return `Hay ${cantNumbers} valores tipo "number"`;
}
const res = contarTipoNumber(["maria",23,11.5,"jose",-1]);
console.log(res);
