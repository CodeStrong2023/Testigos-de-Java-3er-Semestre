//let persona3 = new persona('Carla' , 'Ponce');

class persona{  //Clase padre

    static contadorPersona = 0;//atributo statico
    //email = 'valor default email'; //atributo no statico

    static get MAX_OBJ(){ //Este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(persona.contadorPersona < persona.MAX_OBJ){
            this.idPersona = ++persona.contadorPersona;
        }
        else{
            console.log('Se ha superado el maximo de objetos permitidos');
        }
       // console.log('Se incrementa el contador: '+ persona.contadorObjetosPersona);
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;

    }

    nombreCompleto(){
        return this.idPersona+' '+this.nombre+' '+this.apellido;
    }
    //Sobreescribiendo el metodo de la clase padre(object)
    toString(){ //regresa un string
        //Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecucion
        //El metodo que se ejecuta depende de si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde este metodo static');
    }

    static saludar2(persona){
        console.log(persona.nombre+ ' '+persona.apellido);

    }

}
class Empleado extends persona{ //Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }

}

let persona1 = new persona('Martin', 'Perez')
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log (persona1.nombre);
//console.log(persona1);
let persona2 = new persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
//console.log(persona2);

let Empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(Empleado1);
console.log(Empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y metodos de esta dinamica
console.log(Empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); no se utiliza desde el objeto
persona.saludar();
persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(Empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(Empleado1.email);
//console.log(persona.email); No puede acceder desde la clase
console.log(persona1.toString());
console.log(persona2.toString());
console.log(Empleado1.toString());
console.log(persona.contadorPersona);
let persona3 = new persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(persona.contadorPersona);


console.log(persona.MAX_OBJ);
//persona.MAX_OBJ = 10; No se puede modificar ni alterar
console.log(persona.MAX_OBJ);

let persona4 = new persona('Franco', 'Diaz');
console.log(persona4.toString());
let persona5 = new persona('Liliana', 'Paz');
console.log(persona5.toString());