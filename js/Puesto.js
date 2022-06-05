class Puesto{
    static contadorPuestos = 0;
    constructor(denominacion,salario){
        this._idPue = Puesto.contadorPuestos++;
        this._denominacion = denominacion;
        this._salario = salario;
    }
    get idPue(){
        return this._idPue;
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
