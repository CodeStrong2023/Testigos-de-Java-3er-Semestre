class empleado extends persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString()+' '+this._idEmpleado+' '+this._sueldo;
    }
} 