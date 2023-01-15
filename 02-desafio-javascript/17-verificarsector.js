/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */
const verificarSector = function (econtact = {}, sector) {
    if (typeof econtact.datos?.sectores === "undefined") {
        return "No Hay sectores asignadas";
    }

    const resSector = econtact.datos.sectores.find(s => s.toLowerCase() === sector.toLowerCase());
    return typeof resSector !== "undefined"
};

const objetoFijo = {
    empresa: "E-Contact",
    datos: {
        empleados: 100,
        direccion: {
            calle: "Calle Córdoba",
            numero: 476,
            piso: 3,
        },
        sectores: [
            "Contabilidad",
            "Finanzas",
            "Informática",
            "Atención al público",
        ],
        sedes: {
            Chile: { telefono: 56227566262, empleados: 35 },
            Peru: { telefono: 5116358614, empleados: 25 },
            EEUU: { telefono: 17864978777, empleados: 43 },
            Ecuador: { telefono: null, empleados: 19 },
            Colombia: { telefono: 3178952449, empleados: 28 },
        },
    },
};
console.log(verificarSector(objetoFijo, "Contabilidad"));
console.log(verificarSector(objetoFijo, "contabilidad"));
console.log(verificarSector(objetoFijo, "lynn"));