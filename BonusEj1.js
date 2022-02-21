//Realizar un programa que, ingresando la letra de la categoría de
//Monotributo, permita obtener algunos de sus datos. //
const afip=[
    {
    categoria: "A",
    IngresosBrutos:466201.59,
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
var consulta= window.prompt("Ingrese su catergoría de Monotributo: A,B o C")
switch(consulta){
    case 'A'|| 'a':  var consultaB= window.prompt("Indique la opción deseada: A- Ingresos Brutos. B-Actividad."),
        if (consultaB=="a"|| consultaB=="A"){
            console.log('Usted está en la categoría'+categoria+' y sus ingresos brutos son'+IngresosBrutos),
        };
        else if (consultaB=="b"|| consultaB=="B"){
            console.log('Usted está en la categoría'+categoria+' y su actividad es '+Actividad), 
        },
        else {
            console.log("Opción incorrecta, ingrese los datos nuevamente."),
        },
    case 'b'|| 'B':  var consultaC= window.prompt("Indique la opción deseada: A- Ingresos Brutos. B-Actividad."),
        if (consultaC=="a"|| consultaC=="A"){
            console.log('Usted está en la categoría'+categoria+' y sus ingresos brutos son'+IngresosBrutos), 
        }
        else if (consultaC=="b"|| consultaC=="B"){
            console.log('Usted está en la categoría'+categoria+' y su actividad es '+Actividad), 
        },
        else {
            console.log("Opción incorrecta, ingrese los datos nuevamente."),
        },
        case 'c'||'C':  var consultaD= window.prompt("Indique la opción deseada: A- Ingresos Brutos. B-Actividad.")
        if (consultaD=="a"|| consultaD=="A"){
            console.log('Usted está en la categoría'+categoria+' y sus ingresos brutos son'+IngresosBrutos),
        },
        else if (consultaD=="b"|| consultaD=="B"){
            console.log('Usted está en la categoría'+categoria+' y su actividad es '+Actividad), 
        },
        else{
            console.log("Opción incorrecta, ingrese los datos nuevamente."),
        }
};
