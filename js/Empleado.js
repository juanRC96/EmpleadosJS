class Empleado{
    static contadorEmpleados = 0;
    constructor(nombre,apellido,idPue){
        this._idEmp = Empleado.contadorEmpleados++;
        this._nombre = nombre;
        this._apellido = apellido;
        this._idPue = idPue;
    }
    get idEmp(){
        return this._idEmp;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    get idPue(){
        return this._idPue;
    }
    set idPue(idPue){
        this._idPue=idPue;
    }
}
