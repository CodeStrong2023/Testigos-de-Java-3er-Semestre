class persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this.edad = edad;

    }

    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    toString () {
        return this._idPersona + ' ' +this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }
}


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

class cliente extends persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString()+' '+this._idCliente+' '+this._fechaRegistro;
    }
}

//Pruebas clase persona

let persona1 = new persona('Juan', 'Perez', 32);
console.log(persona1.toString());

let persona2 = new persona('Carla', 'Ortega', 22);
console.log(persona2.toString());

//Prueba clase empleado
let empleado1 = new empleado('Pedro', 'Roman', 18, 5000);
console.log(empleado1.toString());

let empleado2 = new empleado('Jonas', 'Torres', 30, 7000);
console.log(empleado2.toString());

//Prueba clase cliente
let cliente1 = new cliente('Miguel', 'Sala', 29, new Date());
console.log(cliente1.toString());

let cliente2 = new cliente('Natalia', 'Ortega', 22, new Date());
console.log(cliente2.toString());