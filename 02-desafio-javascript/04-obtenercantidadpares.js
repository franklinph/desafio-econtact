/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

 const obtenerCantidadDePares = function(numero1, numero2) {
    let cantPares = 0;
    for (let n=numero1; n<=numero2; n++) {
        if (n % 2 === 0) {
            cantPares++;
        }
    }
    return `La cantidad de números pares obtenido fue de: ${cantPares}`;
 }
 const res = obtenerCantidadDePares(3,15);
 console.log(res);