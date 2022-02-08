//Realizar un programa que, ingresando la letra de la categoría de
//Monotributo, permita obtener algunos de sus datos. Quiero lograrlo con HTML formularios//
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
    }
]
var consulta= window.prompt("Ingrese su catergoría de Monotributo")
if (consulta== "a"|| consulta=="A"){
    var consultaB= window.prompt("Indique la opción deseada: A- Ingresos Brutos. B-Actividad.")
        switch(afip){
            case 'A': alert('Usted está en la categoría'+categoria+' y sus ingresos brutos son'+IngresosBrutos),
                break;
            case 'B':alert('Usted está en la categoría'+categoria+' y su actividad es '+Actividad),
                break
        }