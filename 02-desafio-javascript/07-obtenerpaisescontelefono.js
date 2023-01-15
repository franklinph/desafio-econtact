/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */
const obtenerPaisesConTelefono = function(econtact = {}) {
    if (typeof econtact.datos?.sedes === "undefined") {
        return "No Hay sedes asignadas";
    }
    
    const telefonos = [];
    const sedes = Object.keys(econtact.datos.sedes);
    sedes.forEach(function(elem) {
        const sede = econtact.datos.sedes[elem];
        if (typeof sede.telefono !== "undefined" && sede.telefono !== null) {
            telefonos.push(sede.telefono);
        }       
      });
    
      return `La cantidad de países con telefono son: ${telefonos.length}`;
}

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
  const res = obtenerPaisesConTelefono(objetoFijo);
  console.log(res);