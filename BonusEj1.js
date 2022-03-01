const afip = [{
        categoria: "A",
        IngresosBrutos: 466201.59,
        Actividad: "No excluida",
    },
    {
        categoria: "B",
        IngresosBrutos: 693002.36,
        Actividad: "No excluida",
    },
    {
        categoria: "C",
        IngresosBrutos: 970203.30,
        Actividad: "No excluida",
    },
]
var consulta = window.prompt("Ingrese su catergoría de Monotributo: A,B o C")
//para no preguntar por 'a' || 'A' (minúscula y mayúscula) conviene pasarlo a minúscula con toLowerCase()
switch (consulta.toLowerCase()) {
    case 'a': {
        var consultaB = window.prompt("Indique la opción deseada: A- Ingresos Brutos. B-Actividad.")
        if (consultaB == "a" || consultaB == "A") {
            //En este caso, al preguntar por categoria, IngresosBrutos o Actividad, no va a funcionar, ya que
            //esta contenido en un array de objetos. Para ello, se podría usar un .find o crear la función uno mismo.
            console.log('Usted está en la categoría ' + categoria + ' y sus ingresos brutos son ' + IngresosBrutos)
        } else if (consultaB == "b" || consultaB == "B") {
            console.log('Usted está en la categoría ' + categoria + ' y su actividad es ' + Actividad)
        } else {
            console.log("Opción incorrecta, ingrese los datos nuevamente.")
        }
    }
    case 'b': {
        var consultaC = window.prompt("Indique la opción deseada: A- Ingresos Brutos. B-Actividad.")
        if (consultaC == "a" || consultaC == "A") {
            console.log('Usted está en la categoría ' + categoria + ' y sus ingresos brutos son' + IngresosBrutos)
        } else if (consultaC == "b" || consultaC == "B") {
            console.log('Usted está en la categoría ' + categoria + ' y su actividad es ' + Actividad)
        } else {
            console.log("Opción incorrecta, ingrese los datos nuevamente.")
        }
    }
    case 'c': {
        var consultaD = window.prompt("Indique la opción deseada: A- Ingresos Brutos. B-Actividad.")
        if (consultaD == "a" || consultaD == "A") {
            console.log('Usted está en la categoría ' + categoria + ' y sus ingresos brutos son' + IngresosBrutos)
        } else if (consultaD == "b" || consultaD == "B") {
            console.log('Usted está en la categoría ' + categoria + ' y su actividad es ' + Actividad)
        } else {
            console.log("Opción incorrecta, ingrese los datos nuevamente.")
        }
    }
};

