class Empleado{
    constructor(idEmp,nombre,apellido,idPue){
        this.idEmp = idEmp;
        this.nombre = nombre;
        this.apellido = apellido;
        this.idPue = idPue;
    }
    get idEmp(){
        return this._idEmp;
    }
    set idEmp(idEmp){
        this._idEmp=idEmp;
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
