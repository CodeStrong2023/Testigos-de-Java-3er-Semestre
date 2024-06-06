class Persona{
    constructor(nombre,apellido){
        this._nombre= nombre;
        this._apellido= apellido;
    }
    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre=nombre
    }
   
   
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
   
}

let persona1= new Persona('Martin','Perez');
console.log(persona1.nombre);
persona1.nombre= 'Juan carlos';
console.log(persona1.nombre);
//Tarea persona1
console.log(persona1.apellido);
persona1.apellido='Gutierrez';
console.log(persona1.apellido);
//console.log(persona1);

let persona2= new Persona ('Carlos','Lara');
console.log(persona2.nombre);
persona2.nombre='Maria Laura';
console.log(persona2.nombre);
//tarea persona2
console.log(persona2.apellido);
persona2.apellido='Perez';
console.log(persona2.apellido);
//console.log(persona2);
