class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get _idPersona(){
        return this._idPersona;
    }

    get nombre(){
        this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `
        ${this._idPersona} 
        ${this._nombre} 
        ${this._apellido} 
        ${this._edad}`;
    }

    

}