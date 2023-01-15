/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */
const validarNombre = function (nombres = [], nombre) {
    const busqueda = nombres.find(n => n.toLowerCase() === nombre.toLowerCase());

    return typeof busqueda !== "undefined";
};
const nombres = ["Maria", "Juan", "Pedro", "Cuasimodo", "Esmeralda"]
console.log(validarNombre(nombres, "pedro"));
console.log(validarNombre(nombres, "Tita"));