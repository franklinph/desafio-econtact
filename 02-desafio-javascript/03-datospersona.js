/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */
 const datosPersona = function(persona = {}) {
    const {nombre, edad, altura} = persona;

    return `Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`;
 }
 const res = datosPersona({
    nombre: "Julio Garcia",
    edad: 25,
    altura: "1.50 mts"
 });
 console.log(res);