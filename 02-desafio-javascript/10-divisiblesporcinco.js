/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros = []) {
    const divCinco = numeros.filter(n => n % 5 === 0);
    return divCinco.length;
}
const res = divisiblesPorCinco([0, 1, 5, 13, 15, 20]);
console.log(res);