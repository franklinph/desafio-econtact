/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */
const quitarParteDecimal = function (arregloNumerosReales = []) {
    const enteros = arregloNumerosReales.map(function(valor){
        return Math.trunc(valor);
    });
    return enteros;
 };

 const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];
 console.log(quitarParteDecimal(numerosReales));