let puestos = [
    new Puesto("Operario",50000),
    new Puesto("Administrativo",80000),
    new Puesto("Gerente",130000),
];

let empleados = [
    new Empleado("Juan","Perez",1),
    new Empleado("Ana","Diaz",2),
];

function carga(){
    cargarEmpleados()
    cargarPuestos()
    mostrarPuestos()
}

function mostrarPuestos(){
    let selec = ''
    for(let puesto of puestos){
        selec += `<option value="${puesto._idPue}">${puesto._denominacion}</option>`
    }
    document.getElementById("pue").innerHTML = selec
}

function cargarEmpleados(){
    let tabla = "<tr><th>ID Empleado</th><th>Nombre</th><th>Apellido</th><th>Puesto</th><th>Salario</th></tr>";
    for(let empleado of empleados){
        tabla += `<tr><th>${empleado._idEmp}</th><th>${empleado._nombre}</th><th>${empleado._apellido}</th><th>${obtenerDenomPuesto(empleado._idPue)}</th><th>$${(obtenerSueldo(empleado._idPue)).toLocaleString()}</th></tr>`
    }
    document.getElementById("empleados").innerHTML = tabla
}

function cargarPuestos(){
    let tabla = "<tr><th>ID Puesto</th><th>Denominacion</th><th>Salario</th></tr>"
    for(let puesto of puestos){
        tabla += `<tr><th>${puesto._idPue}</th><th>${puesto._denominacion}</th><th>$${(puesto._salario).toLocaleString()}</th></tr>`
    }
    document.getElementById("puestos").innerHTML = tabla
}

function obtenerSueldo(id){
    let obj = puestos.find(p => p._idPue == id)
    return obj._salario
}

function obtenerDenomPuesto(id){
    let obj = puestos.find(p => p._idPue == id)
    return obj._denominacion
}

function agregarEmpleados(){
    let formulario = document.forms["agregarEmp"]
    nuevoEmp = new Empleado
    nuevoEmp._nombre = formulario["nom"].value
    nuevoEmp._apellido = formulario["ape"].value
    nuevoEmp._idPue = formulario["pue"].value
    empleados.push(nuevoEmp)
    carga()
}

function agregarPuestos(){
    let formulario = document.forms["agregarPue"]
    nuevoPue = new Puesto
    nuevoPue._denominacion = formulario["den"].value
    nuevoPue._salario = parseFloat(formulario["sal"].value)
    puestos.push(nuevoPue)
    carga()
}
