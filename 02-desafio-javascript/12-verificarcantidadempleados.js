/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */
const verificarCantidadEmpleados = function (econtact = {}) {
    if (typeof econtact.datos?.sedes === "undefined") {
        return "No Hay sedes asignadas";
    }

    const sedes = Object.keys(econtact.datos.sedes);
    const empleadosSedes = sedes.reduce((sumatoria, value) => {
        const sede = econtact.datos.sedes[value];
        return sumatoria + sede.empleados;
    }, 0);

    //console.log(econtact.datos.empleados, empleadosSedes);
    return econtact.datos.empleados==empleadosSedes;
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
const res = verificarCantidadEmpleados(objetoFijo);
console.log(res);