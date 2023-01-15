/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */
const verificarCantidadEmpleados = function (econtact = {}, cantidad) {
    if (typeof econtact.datos?.sedes === "undefined") {
        return "No Hay sedes asignadas";
    }

    const sedes = Object.keys(econtact.datos.sedes);
    const sedesMenor = sedes.filter(function(value){
        const sede = econtact.datos.sedes[value];
        if (sede.empleados<cantidad) {
            return true;
        }
    });
    //console.log(sedesMenor);
    return sedesMenor.length;
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
console.log(verificarCantidadEmpleados(objetoFijo, 19));
console.log(verificarCantidadEmpleados(objetoFijo, 26));