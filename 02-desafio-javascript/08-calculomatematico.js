/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */
const calculoMatematico = function (operacion, numero1, numero2) {
    switch (operacion) {
        case "+":
            return numero1+numero2;
            break;
        case "-":
            return numero1-numero2;
            break;
        case "*":
            return numero1*numero2;
            break;
        case "/":
            if (numero2===0) {
                //throw new Error('Division por cero!');
                return "Division por cero!";
            }
            return numero1/numero2;
            break;
        default:
            return "La operación matemática que intenta realizar es inexistente";
    }
}
console.log(calculoMatematico("+", 5, 6));
console.log(calculoMatematico("-", 6, 5));
console.log(calculoMatematico("*", 3, 5));
console.log(calculoMatematico("/", 20, 5));
console.log(calculoMatematico("/", 6, 0));
console.log(calculoMatematico("?", 5, 6));