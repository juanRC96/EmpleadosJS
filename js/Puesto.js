class Puesto{
    constructor(idPue,denominacion,salario){
        this.idPue = idPue;
        this.denominacion = denominacion;
        this.salario = salario;
    }
    get idPue(){
        return this._idPue;
    }
    set idPue(idPue){
        this._idPue=idPue;
    }
    get denominacion(){
        return this._denominacion;
    }
    set denominacion(denominacion){
        this._denominacion = denominacion;
    }
    get salario(){
        return this._salario;
    }
    set salario(salario){
        this._salario = salario;
    }
}
