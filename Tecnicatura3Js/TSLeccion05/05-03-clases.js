//let persona3=new Persona('Carla','Ponce');esto no se debe hacer:Persona is not defined

class Persona{//Calse padre
    
    static contadorObjetosPersona=0;
    email='valor default email';//Atributo no estatico

    constructor(nombre,apellido){
        this._nombre= nombre;
        this._apellido= apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
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
    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
    //Sobreescribiendo el metodo de la clase padre (object)
    toString(){//Regresa un String
        //Se aplica el polimorfismo que significa =mulitiples formas en tiempo de ejecución
        //El metodo que se ejecuta depende si es una referencia de tipo padre o hija 
        return this.nombreCompleto();
    }
   
    static saludar(){
        console.log('Saludos desde este metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}

class Empleado extends Persona{//Clase hija
    constructor(nombre,apellido,departamento){
        super(nombre, apellido);
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
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

let empleado1 =new Empleado('Maria','Gimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y metodos de manera dinamica.
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar();no se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email);No puede acceder desde la clase