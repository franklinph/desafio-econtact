/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */
const verificarClave = function (objeto = {}, clave) {
    const keys = Object.keys(objeto);
    const findClave = keys.find(k => k === clave);
    
    return typeof findClave !== "undefined";
};
const alumno = {
    nombre: "Pepe",
    edad: 21,
    profesion: "Ilustrador"
};
console.log(verificarClave(alumno, "altura"));
console.log(verificarClave(alumno, "profesion"));